from django.contrib import admin
from .models import Suggestion

@admin.register(Suggestion)
class SuggestionAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'timestamp', 'is_anonymous']
    list_filter = ['category', 'status', 'timestamp']
    search_fields = ['title', 'description']

