from django.urls import path
from . import views

urlpatterns=[
    path('index/', views.index, name='index'),
    path('screen1', views.screen1, name='screen1'),
    path('user', views.user, name='user'),
    path('login', views.login, name='login'),
    path('iniciosesion', views.iniciosesion, name='iniciosesion'),
    path('shop', views.shop, name='shop'),
    path('crud', views.crud, name='crud'),
    path('carrito', views.carrito, name='carrito'),
]