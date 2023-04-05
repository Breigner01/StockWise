from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.core.exceptions import MessageSendingError
from django.conf import settings

def send_notif_email(owner, notif):
    email_subject = '['+notif.get_type_display()+'] -- ' + notif.subject
    email_body = render_to_string('notifyEmail.html', {
        'body': notif.message,
    })
    
    try:
        email = EmailMessage(subject=email_subject, body=email_body,
            from_email=settings.EMAIL_FROM_USER,
            to=[owner.email]
            )

        email.send()
    except MessageSendingError as e:
        # handle error
        print(f"Error sending email: {e}")