"""
URL configuration for nihub project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from dsb.views import home_view
from rest_framework.schemas import get_schema_view
from rest_framework.renderers import JSONOpenAPIRenderer

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),
    path('api/dsb/', include('dsb.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('openapi/', get_schema_view( title="Digital Suggestion Box API",
                                     renderer_classes=[JSONOpenAPIRenderer]), 
                                     name='openapi-schema'),
]

# This is the main URL configuration for the nihub project.
# It includes the admin interface, the API routes for the DSB app, and JWT authentication
