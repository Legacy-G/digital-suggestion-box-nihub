from django.contrib import admin
from .models import Suggestion

@admin.register(Suggestion)
class SuggestionAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'category',
        'status',
        'timestamp',
        'is_anonymous',
        'user_display',
    )
    list_filter = ('category', 'status', 'is_anonymous', 'timestamp')
    search_fields = ('title', 'description', 'name')
    ordering = ('-timestamp',)
    readonly_fields = ('timestamp',)

    def user_display(self, obj):
        return obj.user.username if obj.user else "Anonymous"
    user_display.short_description = 'Submitted By'
