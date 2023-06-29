from django.contrib import admin
from .models import etiqueta, Producto,Usuarios2,Perfil

# Register your models here.
    
class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombre", "precio","etiqueta"]
    search_fields = ["nombre"]
    list_filter = ["etiqueta"]

admin.site.register(etiqueta)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Usuarios2)
admin.site.register(Perfil)