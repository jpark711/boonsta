# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
from django.db import models

class Customer(models.Model):
    name = models.CharField("Name", max_length=255)
    memo = models.TextField(blank=True, null=True)
    time = models.CharField("Time", max_length=255)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.name
