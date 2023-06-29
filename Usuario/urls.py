from django.urls import path
from .views import index, screen1,user,SignUp,login_user
from . import views

urlpatterns = [
    path('', index, name="index"),
    path('screen1', screen1, name="screen1"),
    path('Perfil', user, name="user"),
    path('SignUp', SignUp, name="SignUp"),
    path('login_user', login_user, name="login_user")
]