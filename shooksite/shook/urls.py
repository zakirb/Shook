from django.urls import path, re_path
from . import views

#added for Token
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('leads/', views.LeadListCreate.as_view() ),
    path('shakes/', views.ShakeViewSet.as_view()),
    path('shakes/edit/', views.ShakeStatusEdit.as_view()),
    path('<int:pk>/', views.LeadDetail.as_view()),
    path('user/create/', views.CreateUser.as_view()),
    re_path(r'^obtain-auth-token/$', obtain_auth_token),
]

    # path('login/', views.login_view, name='login'),
