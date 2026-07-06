from django.urls import path

from .views import analyze_error, history

from .auth_views import signup, login


urlpatterns = [

    path("signup/", signup),

    path("login/", login),

    path("analyze/", analyze_error),

    path("history/", history),

]