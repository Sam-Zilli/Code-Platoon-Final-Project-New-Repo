# Generated by Django 4.1.7 on 2023-03-09 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_rename_price_product_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='value',
            field=models.IntegerField(default=0),
        ),
    ]
