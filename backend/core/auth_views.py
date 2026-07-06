import re

from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(["POST"])
def signup(request):
    username = request.data.get("username", "").strip()
    email = request.data.get("email", "").strip()
    password = request.data.get("password", "")

    # Required fields
    if not username or not email or not password:
        return Response({"error": "All fields are required."}, status=400)

    # Username validation
    if len(username) < 3:
        return Response(
            {"error": "Username must contain at least 3 characters."},
            status=400
        )

    if not username.replace("_", "").isalnum():
        return Response(
            {"error": "Username can contain only letters, numbers and underscore (_)."},
            status=400
        )

    # Email validation
    email_pattern = r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
    if not re.match(email_pattern, email):
        return Response({"error": "Enter a valid email address."}, status=400)

    # Password validation
    if len(password) < 8:
        return Response(
            {"error": "Password must be at least 8 characters long."},
            status=400
        )

    if not re.search(r"[A-Z]", password):
        return Response(
            {"error": "Password must contain at least one uppercase letter."},
            status=400
        )

    if not re.search(r"[a-z]", password):
        return Response(
            {"error": "Password must contain at least one lowercase letter."},
            status=400
        )

    if not re.search(r"\d", password):
        return Response(
            {"error": "Password must contain at least one number."},
            status=400
        )

    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return Response(
            {"error": "Password must contain at least one special character."},
            status=400
        )

    # Duplicate checks
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists."}, status=400)

    if User.objects.filter(email=email).exists():
        return Response({"error": "Email already exists."}, status=400)

    # Create user
    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    return Response(
        {
            "message": "User created successfully!",
            "username": user.username,
            "email": user.email
        },
        status=201
    )


@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user is None:
        return Response({"error": "Invalid username or password."}, status=401)

    refresh = RefreshToken.for_user(user)

    return Response({
        "message": "Login successful!",
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "username": user.username,
        "email": user.email,
    })