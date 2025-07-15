from django.http import JsonResponse
from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Suggestion
from .serializers import SuggestionSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status as drf_status


from django.http import JsonResponse

def home_view(request):
    return JsonResponse({"message": "Digital Suggestion Box API is running."})

def normalize(value):
    return value.strip().lower().replace(" ", "").replace("-", "")

class SuggestionViewSet(viewsets.ModelViewSet):
    serializer_class = SuggestionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['timestamp', 'category']
    permission_classes_by_action = {
        'update': [permissions.IsAdminUser()],
        'partial_update': [permissions.IsAdminUser()],
        'destroy': [permissions.IsAdminUser()],
        'list': [permissions.IsAuthenticated()],
        'create': [permissions.AllowAny()],
    }

    def update_status(self, request, pk=None):
        suggestion = self.get_object()
        new_status = request.data.get('status')
        admin_comment = request.data.get('admin_comment')

        if new_status:
            suggestion.status = new_status.lower().replace(" ", "")
        if admin_comment is not None:
            suggestion.admin_comment = admin_comment

        suggestion.save()
        return Response({'message': 'Status updated successfully'}, status=drf_status.HTTP_200_OK)

    def get_queryset(self):
        queryset = Suggestion.objects.select_related('user').order_by('-timestamp')
        category = self.request.query_params.get('category')
        status = self.request.query_params.get('status')

        if category:
            queryset = queryset.filter(category=normalize(category))
        if status:
            queryset = queryset.filter(status=normalize(status))

        return queryset

    def get_permissions(self):
        return self.permission_classes_by_action.get(self.action, [permissions.AllowAny()])

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_auth_view(request):
    return Response({ "is_admin": request.user.is_staff })
