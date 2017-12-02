from django.db import models

# Create your models here.

class Bol(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    buyer = models.CharField(max_length=200)
    vendor = models.CharField(max_length=200)
    cases = models.TextField() #screw this, we'll serialize JSON

    def __str__(self):
    	return self.vendor

# class Case(models.Model):
# 	bol = models.ForeignKey(Bol, on_delete=models.CASCADE)
# 	itemName = models.CharField(max_length=200)
# 	contract = models.CharField(max_length=200)
# 	barcode = models.CharField(max_length=200)

# 	def __str__(self):
# 		return self.itemName