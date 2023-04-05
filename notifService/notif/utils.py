from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import EmailMessage
from django.conf import settings

def send_notif_email(owner, notif):
    email_subject = '['+notif.get_type_display()+'] -- ' + notif.subject
    email_body = render_to_string('notifyEmail.html', {
        'body': notif.message,
    })
    
    email = EmailMessage(subject=email_subject, body=email_body,
        from_email=settings.EMAIL_FROM_USER,
        to=[owner.email]
        )

    email.send()