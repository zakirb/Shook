from django.urls import path

from . import views

urlpatterns = [
    path('shook/', views.LeadListCreate.as_view() ),
    path('shook/login', views.login),

    path('<int:pk>/', views.LeadDetail.as_view()),
]

    # path('login/', views.login_view, name='login'),
