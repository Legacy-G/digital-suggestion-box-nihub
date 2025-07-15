from rest_framework import serializers
from .models import Suggestion

class SuggestionSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    category_display = serializers.SerializerMethodField()
    status_display = serializers.SerializerMethodField()

    class Meta:
        model = Suggestion
        fields = [
            'id',
            'title',
            'description',
            'category',
            'name',
            'status',
            'timestamp',
            'user',
            'is_anonymous',
            'admin_comment',            # ✅ Needed for comment editing
            'category_display',         # ✅ Readable labels for frontend
            'status_display'
        ]
        read_only_fields = ['timestamp', 'user']

    def get_category_display(self, obj):
        return obj.get_category_display()

    def get_status_display(self, obj):
        return obj.get_status_display()
