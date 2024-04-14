from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id','vehiculo','dueño','patente','reparar','done','fecha')
        read_only_fields = ('id','created_at')