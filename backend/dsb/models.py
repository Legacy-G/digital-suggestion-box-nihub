from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Suggestion(models.Model):
    class Category(models.TextChoices):
        ENHANCEMENT = 'enhancement', 'Enhancement'
        BUGFIX = 'bugfix', 'Bug Fix'
        UI_IMPROVEMENT = 'uiimprovement', 'UI Improvement'
        PERFORMANCE = 'performance', 'Performance'
        FEATURE_REQUEST = 'featurerequest', 'Feature Request'
        ACCESSIBILITY = 'accessibility', 'Accessibility'
        OTHER = 'other', 'Other'

    class Status(models.TextChoices):
        PENDING = 'pending', 'Pending'
        REVIEWED = 'reviewed', 'Reviewed'
        ACCEPTED = 'accepted', 'Accepted'
        REJECTED = 'rejected', 'Rejected'

    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=Category.choices)
    name = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    is_anonymous = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} ({self.get_category_display()})"
