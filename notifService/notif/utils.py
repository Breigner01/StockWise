from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings

def send_notif_email(owner, notif):
    try: 
        email_subject = '['+notif.get_type_display()+'] -- ' + notif.subject
        email_body = render_to_string('notifyEmail.html', {
            'body': notif.message,
        })
        
        
        email = EmailMessage(
            subject=email_subject,
            body=email_body,
            from_email=settings.EMAIL_FROM_USER,
            to=[owner.email]
        )

        email.send()
    except Exception:
        raise
    
