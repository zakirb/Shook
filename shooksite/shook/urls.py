from django.urls import path

from . import views

urlpatterns = [
    path('api/shook/', views.LeadListCreate.as_view() ),
]
