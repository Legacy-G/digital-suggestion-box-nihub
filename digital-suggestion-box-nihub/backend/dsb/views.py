from django.shortcuts import render
from rest_framework import viewsets, permissions,filters, generics
from .models import Suggestion
from .serializers import SuggestionSerializer
from django_filters.rest_framework import DjangoFilterBackend

# DSB (Digital Suggestion Box) views.
class SuggestionViewSet(viewsets.ModelViewSet):
    queryset = Suggestion.objects.all().order_by('-timestamp')
    serializer_class = SuggestionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'status', 'is_anonymous']
    search_fields = ['title', 'description']
    ordering_fields = ['timestamp', 'category']

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        elif self.action == 'list':
            return [permissions.IsAuthenticated()]
        elif self.action == 'create':
            return [permissions.AllowAny()]  # ✅ Allow public submissions
        return [permissions.AllowAny()]

