from tastypie.resources import ModelResource
from api.models import Bol

class BolResource(ModelResource):
	class Meta:
		queryset = Bol.objects.all()
		resource_name = 'bol'