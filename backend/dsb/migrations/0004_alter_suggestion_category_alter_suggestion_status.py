# Generated by Django 5.2.4 on 2025-07-15 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsb', '0003_suggestion_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suggestion',
            name='category',
            field=models.CharField(choices=[('enhancement', 'Enhancement'), ('bugfix', 'Bug Fix'), ('uiimprovement', 'UI Improvement'), ('performance', 'Performance'), ('featurerequest', 'Feature Request'), ('accessibility', 'Accessibility'), ('other', 'Other')], max_length=20),
        ),
        migrations.AlterField(
            model_name='suggestion',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('reviewed', 'Reviewed'), ('accepted', 'Accepted'), ('rejected', 'Rejected')], default='pending', max_length=20),
        ),
    ]
