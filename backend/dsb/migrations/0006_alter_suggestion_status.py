# Generated by Django 5.2.4 on 2025-07-25 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsb', '0005_suggestion_admin_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suggestion',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('inprogress', 'In Progress'), ('completed', 'Completed'), ('rejected', 'Rejected')], default='pending', max_length=20),
        ),
    ]
