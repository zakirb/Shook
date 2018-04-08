from django.shortcuts import render

from django.http import HttpResponse
from shook.models import Lead
from shook.serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

def login(request):
    if request.method == "POST":
        print(request.POST)
    #     form = LoginForm(request.POST)
    #     if form.is_valid():
    #         u = form.cleaned_data['username']
    #         p = form.cleaned_data['password']
    #         user = authenticate(username = u, password = p)
    #         if user is not None:
    #             if user.is_active:
    #                 login(request, user)
    #                 return HttpResponseRedirect('/')
    #             else:
    #                 print('This account has been disabled')
    #         else:
    #             print('The username and/or password is incorrect')
    # else:
    #     form = LoginForm()
    # return render(request, 'login.html', {'form':form})
