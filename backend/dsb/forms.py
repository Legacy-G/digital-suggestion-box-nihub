from django import forms 
from .models import Suggestion
from django.utils.translation import gettext_lazy as _
from . import models

#create your forms here
class SuggestionForm(forms.ModelForm):
    class Meta:
        model = models.Suggestion
        fields = ['title', 'description', 'category']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'category': forms.Select(attrs={'class': 'form-select'}),
        }