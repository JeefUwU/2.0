# Generated by Django 4.1.2 on 2023-06-28 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0005_usuarios2_delete_usuarios'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios2',
            name='email',
            field=models.CharField(blank=True, max_length=50, null=True, unique=True),
        ),
    ]
