from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from .serializers import *

# Generic view interaction (basically CRUD)
class OwnerView(viewsets.ModelViewSet):
    
    permission_classes = [permissions.IsAdminUser]

    serializer_class = OwnerSerializer
    
    def get_queryset(self):
        return Owner.objects.all()

    def perform_create(self, serializer):
        serializer.save()

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

# This is just an example of how we can perform complex logic of different types of requests
class ComplexNotifView(generics.GenericAPIView):

    # Making my own custom get
    def get(self, request, *args, **kwargs):
        notifs = []

        notif_query_set = Notif.objects.all()
        for notif_model in notif_query_set:
            notif = ComplexNotifSerializer(notif_model).data
            notif['subject'] = "Complex Modification"
            notifs.append(notif)

        return Response(notifs)
    
# This is just an example of how we can perform complex logic of different types of requests
class NotifyOwnerView(generics.GenericAPIView):

    # Making my own custom get
    def get(self, request, *args, **kwargs):
        notifs = []

        notif_query_set = Notif.objects.all()
        for notif_model in notif_query_set:
            notif = ComplexNotifSerializer(notif_model).data
            notif['subject'] = "Complex Modification"
            notifs.append(notif)

        return Response(notifs)
    
# This is just an example of how we can perform complex logic of different types of requests
class NotifyAllView(generics.GenericAPIView):

    # Making my own custom get
    def get(self, request, *args, **kwargs):
        notifs = []

        notif_query_set = Notif.objects.all()
        for notif_model in notif_query_set:
            notif = ComplexNotifSerializer(notif_model).data
            notif['subject'] = "Complex Modification"
            notifs.append(notif)

        return Response(notifs)