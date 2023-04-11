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

class NotifOwnersSerializer(serializers.ModelSerializer):
    owner_ids = serializers.ListField(
        child=serializers.CharField(), write_only=True, required=True, allow_empty=False
    )

    class Meta:
        model = Notif
        fields = ('type', 'owner', 'subject', 'message', 'owner_ids')

    def create(self, validated_data):
        owner_ids = validated_data.pop('owner_ids', [])
        owners = Owner.objects.filter(id__in=owner_ids)
        notif = Notif.objects.create(**validated_data)
        notif.save()
        return notif, owners