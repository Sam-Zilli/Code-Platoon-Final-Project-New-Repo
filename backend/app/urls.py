from django.urls import path
from . import views



urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),

    path('users/register/', views.registerUser, name="register"),

    # given the url 'products/' call views.getProducts
    path('products/', views.getProducts, name="products"),
    # given the url 'products/product_key' call views.getProduct passing in product key
    path('products/<str:product_key>', views.getProduct, name="product"),
    path('users/', views.getUsers, name="users"),
    path('users/profile/', views.getUserProfile, name="users-profile"),
]