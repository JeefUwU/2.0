# Generated by Django 4.1.2 on 2023-06-29 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0006_alter_usuarios2_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.FileField(null=True, upload_to='productos'),
        ),
    ]