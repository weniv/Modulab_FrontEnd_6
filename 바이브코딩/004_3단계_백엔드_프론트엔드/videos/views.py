from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.db.models import F
from .models import Video

def home(request):
    if request.user.is_authenticated:
        videos = Video.objects.all()
    else:
        videos = Video.objects.filter(is_private=False)
    
    return render(request, 'videos/home.html', {'videos': videos})

def video_detail(request, pk):
    video = get_object_or_404(Video, pk=pk)
    
    if video.is_private and not request.user.is_authenticated:
        return redirect('login')
    
    Video.objects.filter(pk=pk).update(views=F('views') + 1)
    video.refresh_from_db()
    
    return render(request, 'videos/video_detail.html', {'video': video})

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'videos/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'videos/login.html', {'form': form})