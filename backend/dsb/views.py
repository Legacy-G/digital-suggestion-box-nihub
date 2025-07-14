from django.shortcuts import render
from rest_framework import viewsets, permissions,filters, generics
from .models import Suggestion
from .serializers import SuggestionSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse
from rest_framework.response import Response

# DSB (Digital Suggestion Box) views.
def home_view(request):
    return JsonResponse({"message": "Digital Suggestion Box API is running."}, safe=False)


class SuggestionViewSet(viewsets.ModelViewSet):
    queryset = Suggestion.objects.all().order_by('-timestamp')
    serializer_class = SuggestionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'status', 'is_anonymous']
    search_fields = ['title', 'description']
    ordering_fields = ['timestamp', 'category']



    def create(self, request, *args, **kwargs):
        print("🚀 Incoming Data:", request.data)
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print("❌ Validation errors:", serializer.errors)
            return Response(serializer.errors, status=400)
        return super().create(request, *args, **kwargs)




    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        elif self.action == 'list':
            return [permissions.IsAuthenticated()]
        elif self.action == 'create':
            return [permissions.AllowAny()]  # ✅ Allow public submissions
        return [permissions.AllowAny()]

