from django.http import JsonResponse
from rest_framework import viewsets, permissions, filters, status as drf_status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import Suggestion
from .serializers import SuggestionSerializer

# 🌐 Public endpoint to confirm API is active
def home_view(request):
    return JsonResponse({"message": "Digital Suggestion Box API is running."})

# 🔄 Utility for query param normalization
def normalize(value):
    return value.strip().lower().replace(" ", "").replace("-", "")

# 📬 Suggestion ViewSet
class SuggestionViewSet(viewsets.ModelViewSet):
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.select_related('user').order_by('-timestamp')
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['timestamp', 'category']

    permission_classes_by_action = {
        'update': [IsAdminUser],
        'partial_update': [IsAdminUser],
        'destroy': [IsAdminUser],
        'list': [IsAuthenticated],
        'create': [permissions.AllowAny],
    }

        # ✅ Add this inside your SuggestionViewSet
    @action(detail=True, methods=['put'], permission_classes=[IsAdminUser])
    def status(self, request, pk=None):
        suggestion = self.get_object()
        status_value = normalize(request.data.get('status', suggestion.status))
        admin_comment = request.data.get('admin_comment', suggestion.admin_comment)

        suggestion.status = status_value
        suggestion.admin_comment = admin_comment
        suggestion.save()

        return Response({'message': 'Status updated successfully'}, status=drf_status.HTTP_200_OK)

    def get_permissions(self):
        return [permission() for permission in self.permission_classes_by_action.get(self.action, [permissions.AllowAny])]

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        status = self.request.query_params.get('status')

        if category:
            queryset = queryset.filter(category=normalize(category))
        if status:
            queryset = queryset.filter(status=normalize(status))

        return queryset

    # ✅ Custom endpoint for admin status updates
    @action(detail=True, methods=['put'], permission_classes=[IsAdminUser])
    def status(self, request, pk=None):
        suggestion = self.get_object()
        new_status = request.data.get('status')
        admin_comment = request.data.get('admin_comment')

        if new_status:
            suggestion.status = normalize(new_status)
        if admin_comment is not None:
            suggestion.admin_comment = admin_comment

        suggestion.save()
        return Response({'message': 'Status updated successfully'}, status=drf_status.HTTP_200_OK)

# 🔒 Auth Check Endpoint for React's PrivateRoute
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_auth_view(request):
    return Response({ "is_admin": request.user.is_staff })
