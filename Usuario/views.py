from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'Usuario/index.html')

def screen1(request):
    return render(request,'Usuario/screen1.html')

def user(request):
    return render(request, 'Usuario/user.html')

def login(request):
    return render(request, 'Usuario/login.html')

def iniciosesion(request):
    return render(request, 'Usuario/iniciosesion.html')

def shop(request):
    return render(request, 'Usuario/shop.html')

def crud(request):
    Usuario = Usuario,object.all()
    context = {'Usuario': Usuario}
    return render(request,'Usuario/Usuarios_list.hmtl', context)

def carrito(request):
    return render(request,'Usuario/carrito.html')