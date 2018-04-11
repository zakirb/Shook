from django.shortcuts import render

from django.http import HttpResponse
from shook.models import Lead, Shake
from shook.serializers import LeadSerializer, UserSerializer, ShakeSerializer
from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from rest_framework.decorators import api_view, permission_classes


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class ShakeViewSet(generics.ListCreateAPIView):
    queryset = Shake.objects.all()
    serializer_class = ShakeSerializer

    def post(self, request):
        serializer = ShakeSerializer(data=request.data)
        if serializer.is_valid():
            shake = serializer.save()
            if shake:
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=header)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def list(self, request):
    #     page = self.paginate_queryset(queryset)
    #     if page is not None:
    #         serializer = self.get_serializer(page, many=True)
    #         return self.get_paginated_response(serializer.data)
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)
class ShakeStatusEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shake.objects.all()
    serializer_class = ShakeSerializer

    # def put(self, request, *args, **kwargs):
    #     return self.update(request, *args, **kwargs)


    # queryset = Shake.objects.all()
    # serializer_class = ShakeSerializer
    #
    def put(self, request):
        serializer = ShakeSerializer(data=request.data)
        if serializer.is_valid():
            shake = serializer.save()
            if shake:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)



class CreateUser(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get_or_create(user=user)[0]
            header = {"Authorization" : f'{token}'}
            print(token)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=header)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def getToken(request):
    serializer = UserSerializer(request.user)
    if serializer:
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
