from tastypie.resources import ModelResource
# from tastypie.serializers import Serializer
from tastypie import fields
from api.models import Bol, Case, BolSerializer, CaseSerializer
from tastypie.authorization import Authorization
class CaseResource(ModelResource):
	class Meta:
		queryset = Case.objects.all()
		resource_name = 'case'
		authorization = Authorization()
		model = Case()

class BolResource(ModelResource):
	cases = fields.ToManyField('api.resources.CaseResource', 'case_set', full=True)

	class Meta:
		queryset = Bol.objects.all()
		resource_name = 'bol'
		authorization = Authorization()
		serializer = BolSerializer()