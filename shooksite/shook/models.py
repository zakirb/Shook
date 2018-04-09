from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

class Shake(models.Model):
    proposal = models.CharField(max_length=100)
    proposer = models.ForeignKey(User, on_delete=models.CASCADE
    accepter = models.ForeignKey(User)
    description = models.CharField(max_length=250)
    type = models.CharField(max_length=100)
    proposed_command =
    proposed_delete =
    accepted_delete =

    status = models.Charfield(max_length=250) # proposed, accepted, pending, complete, broke
