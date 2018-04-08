from django.shortcuts import render

from django.http import HttpResponse
from shook.models import Lead
from shook.serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
