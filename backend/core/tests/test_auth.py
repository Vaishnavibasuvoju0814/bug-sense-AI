from rest_framework.test import APITestCase


class AuthTest(APITestCase):

    def test_history_requires_login(self):

        response = self.client.get("/api/history/")

        self.assertEqual(response.status_code, 401)