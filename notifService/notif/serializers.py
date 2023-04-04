from rest_framework import serializers
from .models import *

class NotifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notif
        fields = "__all__"

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = "__all__"

class ComplexNotifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notif
        fields = "__all__"
        extra_kwargs = {
            'type':{'read_only':True}
            }
        
    def create(self, validated_data):
        # logic on notif

        complexNotif = Notif.objects.create(
            type = "Default",
            **validated_data
        )

        return complexNotif