from rest_framework import viewsets, generics
from rest_framework.response import Response
from .serializers import *

# Generic view interaction (basically CRUD)
class NotifView(viewsets.ModelViewSet):
    serializer_class = NotifSerializer
    
    def get_queryset(self):
        return Notif.objects.all()

    def perform_create(self, serializer):
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