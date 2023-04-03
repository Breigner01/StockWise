from django.db import models

# Create your models here.
class Notif(models.Model):
    TYPE_OPTIONS = [
        ('Default', 'Default'),
        ('NewProduct', 'New Product'),
        ('NewSeller', 'New Seller'),
        ('OutofStock', 'Out of Stock'),
    ]
    type = models.CharField(
        choices=TYPE_OPTIONS,
        max_length=20,
        default='Default'
    )
    subject = models.CharField(max_length=30)
    message = models.TextField(max_length=250)