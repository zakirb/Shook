from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

class Shake(models.Model):
    proposal = models.CharField(max_length=100)
    proposer = models.ForeignKey(User, related_name='proposer', on_delete=models.CASCADE)
    accepter = models.ForeignKey(User, related_name='accepter', on_delete=models.CASCADE)
    description = models.CharField(max_length=250)
    type = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    finished_date = models.DateTimeField()
    proposed_accepted = models.BooleanField(default=False)
    proposed_delete = models.BooleanField(default=False)
    accepted_delete = models.BooleanField(default=False)
    proposed_complete = models.BooleanField(default=False)
    accepted_complete = models.BooleanField(default=False)
    status = models.CharField(max_length=100) # proposed, accepted, pending, complete, broke

    def __str(self):
        return self.username
