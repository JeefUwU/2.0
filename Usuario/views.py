from django.shortcuts import render, redirect
from .models import Producto, Usuarios2
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def index(request):
    return render(request, 'Usuario/index.html')

def screen1(request):
    Productos = Producto.objects.all()
    data ={
        'Productos': Productos
    }
    return render(request, 'Usuario/screen1.html', data)

def user(request):
    return render(request, 'Usuario/user.html')

def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        User = authenticate(request, username=username, password=password)
        if User is not None:
            login(request, User)
            return redirect('screen1')
        else:
            messages.error(request, "Has tenido un error al iniciar sesión")
            return redirect('login_user')
    else:
        return render(request, 'Usuario/login.html')

def SignUp(request):
    if request.method != "POST":
        return render(request, 'Usuario/registro.html')
    else:
        nombre = request.POST.get('nombre')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Crea un nuevo objeto de usuario y establece los valores
        user = User.objects.create_user(username=username, email=email, password=password)
        user.first_name = nombre
        user.save()

        messages.success(request, "Cuenta creada exitosamente")

        return redirect('login_user')

    return render(request, 'Usuario/registro.html')

def SignOut(request):
    pass