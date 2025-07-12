# nihub/dsb/admin.py
from django.contrib import admin
from .models import Suggestion

# Register your models here.
class SuggestionAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'status', 'timestamp', 'is_anonymous', 'user')
    list_filter = ('category', 'status', 'is_anonymous', 'timestamp')
    search_fields = ('title', 'description')
    ordering = ('-timestamp',)

admin.site.register(Suggestion, SuggestionAdmin)

# Admin configuration for dsb app.