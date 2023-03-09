from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
       
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png') 
     
    shoulder_max = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    shoulder_min = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    chest_max = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    chest_min = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    sleeve_max = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    sleeve_min = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    length_max = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    length_min = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)
    fit = models.CharField(max_length=200, null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self._id)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

    def __str__(self):
        return str(self.address)