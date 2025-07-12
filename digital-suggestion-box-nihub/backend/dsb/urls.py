from django.urls import path, include
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SuggestionViewSet

router = DefaultRouter()
router.register(r'suggestions', SuggestionViewSet, basename='suggestion')

urlpatterns = [
    path('', include(router.urls)),
]
# URL routing for the DSB app, mapping the SuggestionViewSet to the 'suggestions'
# uses Django REST Framework's DefaultRouter for CRUD(create. read. update. delete) operations.