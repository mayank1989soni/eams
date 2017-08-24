from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse,JsonResponse

# Create your views here.
def index(request):
    return render(request, 'eams/index.html', {})
	
def main(request):
    return render(request, 'eams/main.html', {})
	
def about(request):
	return render(request, 'eams/about.html', {})
	
def organisation(request):
	return render(request, 'eams/organisation.html', {})
	
def login(request):
	return render(request, 'eams/login.html', {})
	
def register(request):
	return render(request, 'eams/register.html', {})
	
def forgot(request):
	return render(request, 'eams/forgot-password.html', {})