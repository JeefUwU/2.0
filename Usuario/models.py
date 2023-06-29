from django.db import models

# Create your models here.

class Genero(models.Model):
    id_genero = models.AutoField(db_column='idGenero', primary_key=True)
    genero = models.CharField(max_length=20, blank=False, null=False)
    def __str__(self):return str(self.genero)

class Usuario(models.Model):
    nombre = models.CharField(max_length=20)
    nombre_de_usuario = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField(blank=False, null=False)
    id_genero = models.ForeignKey('Genero', on_delete=models.CASCADE, db_column='idGenero')
    email = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    activo = models.IntegerField()
