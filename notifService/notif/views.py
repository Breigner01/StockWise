from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .utils import send_notif_email

# Add Owner View
class AddOwnerView(generics.GenericAPIView):

    permission_classes = [permissions.IsAdminUser]

    serializer_class = OwnerSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        owner = serializer.save()

        return Response(
            {
                "owner": OwnerSerializer(
                    owner, context=self.get_serializer_context()
                ).data,
                "msg": "Owner has been added to the Notification Service"
            },
            status=status.HTTP_201_CREATED
        )

# Generic view interaction (basically CRUD)
class NotifView(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAdminUser]

    serializer_class = NotifSerializer
    
    def get_queryset(self):
        return Notif.objects.all()

    def perform_create(self, serializer):
        if ("owner" in self.request.data):
            serializer.save(owner=Owner.objects.get(id=self.request.data["owner"]))
        else:
            serializer.save()

# Notify Owner View
class NotifyOwnerView(generics.GenericAPIView):

    permission_classes = [permissions.IsAdminUser]

    serializer_class = NotifSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        notif = serializer.save()

        send_notif_email(
            owner=Owner.objects.get(id=self.request.data["owner"]),
            notif=notif,
            )
        
        notif.delete() # Maybe we can keep this because we dont need the notif data at this point

        return Response(
            {
                "msg": 'Notification sent to owner.'
            },
            status=status.HTTP_201_CREATED
        )
    
# Notify All Owners View
class NotifyAllView(generics.GenericAPIView):

    permission_classes = [permissions.IsAdminUser]

    serializer_class = NotifSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        notif = serializer.save()

        owners = Owner.objects.all()

        for owner in owners:
            send_notif_email(owner=owner, notif=notif)
        
        notif.delete() # Maybe we can keep this because we dont need the notif data at this point?

        return Response(
            {
                "msg": 'Notification sent to all owners.'
            },
            status=status.HTTP_201_CREATED
        )