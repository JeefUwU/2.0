# Generated by Django 4.1.2 on 2023-06-29 01:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0007_alter_producto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuarios2',
            name='imagenU',
            field=models.FileField(null=True, upload_to='Avatar'),
        ),
    ]
