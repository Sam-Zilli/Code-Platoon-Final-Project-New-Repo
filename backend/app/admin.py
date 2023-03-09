from django.contrib import admin

# importing all models so they register in the admin panel
from .models import *

# Register your models here.
admin.site.register(Product)