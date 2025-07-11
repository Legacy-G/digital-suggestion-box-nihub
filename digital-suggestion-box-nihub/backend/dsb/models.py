from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Suggestion(models.Model):
    CATEGORY_CHOICES = [
        ('enhancement', 'Enhancement'),
        ('bugfix', 'Bug Fix'),
        ('uiimprovement', 'UI Improvement'),
        ('performance', 'Performance'),
        ('featurerequest', 'Feature Request'),
        ('accessibility', 'Accessibility'),
        ('other', 'Other'),
    ]

    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    ]
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    name = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    is_anonymous = models.BooleanField(default=False)

    def __str__(self):
        return self.title



