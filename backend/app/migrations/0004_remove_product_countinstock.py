# Generated by Django 4.1.7 on 2023-03-09 23:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_remove_product_brand_remove_product_chest_max_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='countInStock',
        ),
    ]