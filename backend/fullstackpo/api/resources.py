from tastypie.resources import ModelResource
from api.models import Bol
from tastypie.authorization import Authorization


class BolResource(ModelResource):
	class Meta:
		queryset = Bol.objects.all()
		resource_name = 'bol'
		authorization = Authorization()