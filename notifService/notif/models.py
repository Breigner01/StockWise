from django.db import models

# Create your models here.
class Owner(models.Model):
    id = models.CharField(
        primary_key=True,
        max_length=32,
        blank=False,
        error_messages={
            'unique': "A user with that id already exists.",
        }
    )

    email = models.EmailField(
        unique=True,
        error_messages={
            'unique': "A user with that email already exists.",
        }
    )

    def __str__(self):
        return f'{self.id} -- {self.email}'
    
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
    owner = models.ForeignKey(
        Owner, related_name="notifs", on_delete=models.CASCADE, blank=True, null=True
    )
    subject = models.CharField(max_length=30)
    message = models.TextField(max_length=250)

    def __str__(self):
        return f'{self.id} -- {self.type} -- {"ALL" if self.owner == None else self.owner.id}'