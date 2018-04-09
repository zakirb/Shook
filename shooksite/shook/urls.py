from django.urls import path, re_path
from . import views

#added for Token
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('shook/', views.LeadListCreate.as_view() ),
    path('<int:pk>/', views.LeadDetail.as_view()),
    re_path(r'^obtain-auth-token/$', obtain_auth_token),
]

    # path('login/', views.login_view, name='login'),
