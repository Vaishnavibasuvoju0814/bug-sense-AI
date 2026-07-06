from django.contrib.auth.models import User
from rest_framework.test import APITestCase


class LoginTest(APITestCase):

    def test_user_creation(self):

        user = User.objects.create_user(
            username="testuser",
            password="password123"
        )

        self.assertEqual(user.username, "testuser")