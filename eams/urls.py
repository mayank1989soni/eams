from django.conf.urls import include, url
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^main/$',views.main, name='main'),
	url(r'^about/$',views.about, name='about'),
	url(r'^organisation/$',views.organisation, name='organisation'),
	url(r'^login/$',views.login, name='login'),
	url(r'^register/$',views.register, name='register'),
	url(r'^forgot/$',views.forgot, name='forgot'),
]