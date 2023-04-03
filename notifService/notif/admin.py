from django.contrib import admin
from .models import Notif

# Register your models here.
# Hardcoded - issues with 127.0.0.1 vs. localhost
admin.site.site_url = 'localhost:3000/'

admin.site.register(Notif)