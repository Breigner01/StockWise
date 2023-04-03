"""Router registration"""

from rest_framework.routers import DefaultRouter
from .models import *
from .views import *
from django.urls import path

app_name = "notif"

router = DefaultRouter()
router.register(r"api/notif", NotifView, basename="notif")

urlpatterns = [
    path("api/xNotif/", ComplexNotifView.as_view(), name='xNotif'),
]

urlpatterns += router.urls