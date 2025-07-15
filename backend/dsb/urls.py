from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.views.generic import RedirectView
from .views import SuggestionViewSet, check_auth_view

router = DefaultRouter()
router.register(r'suggestions', SuggestionViewSet, basename='suggestion')

urlpatterns = [
    path('', include(router.urls)),
    path('favicon.ico', RedirectView.as_view(url='/static/favicon.ico', permanent=True)),
    path('auth/check/', check_auth_view, name='check_auth'),  # ✅ New JWT-protected auth check
]
