from django.db import models
# from django import serializersviewsets
from tastypie.serializers import Serializer
# Create your models here.

class Bol(models.Model):
	class Meta:
		db_table = 'bol'

	name = models.CharField(max_length=200, default='')
	created_at = models.DateTimeField(auto_now_add=True)
	buyer = models.CharField(max_length=200, default='')
	seller = models.CharField(max_length=200, default='')
	truckTemp = models.IntegerField(default=0)
	# cases = models.TextField(default='')

	def __str__(self):
		return self.seller

class Case(models.Model):
	class Meta:
		db_table = 'case'

	bol = models.ForeignKey(Bol, on_delete=models.CASCADE)
	caseName = models.CharField(max_length=200, default='')
	caseId = models.CharField(max_length=200, default='')
	barcode = models.CharField(max_length=200, default='')
	minTemp = models.IntegerField(default=0)
	maxTemp = models.IntegerField(default=0)

	def __str__(self):
		return self.caseName

class CaseSerializer(Serializer):
	class Meta:
		model = Case
		fields = ['caseName', 'barcode', 'CaseId', 'minTemp', 'maxTemp', 'bol']

class BolSerializer(Serializer):
	cases = CaseSerializer()

	class Meta:
		model = Bol
		fields = ['buyer', 'seller', 'cases']