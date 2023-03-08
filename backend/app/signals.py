from django.db.models.signals import pre_save
from django.contrib.auth.models import User

# This listens for updates to user and sets the username to the user's email for consistency
def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)