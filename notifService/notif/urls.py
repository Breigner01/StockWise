"""Router registration"""

from rest_framework.routers import DefaultRouter
from .models import *
from .views import *
from django.urls import path

app_name = "notif"

router = DefaultRouter()
router.register(r"api/notif", NotifView, basename="notif")

urlpatterns = [
    path("api/addOwner", AddOwnerView.as_view(), name='addOwner'),
    path("api/notify/", NotifyOwnerView.as_view(), name='notifyOwner'),
    path("api/notify/all/", NotifyAllView.as_view(), name='notifyAll'),
]

urlpatterns += router.urls