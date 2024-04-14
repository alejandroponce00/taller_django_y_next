from django.db import models

class Task(models.Model):
    vehiculo = models.CharField(max_length=200)
    dueño = models.TextField(null=True, blank=True)
    patente = models.TextField(null=True, blank=True)
    reparar = models.TextField(null=True, blank=True)
    done = models.BooleanField(default= False)
    fecha = models.DateTimeField(auto_now_add=True)
