from django.test import TestCase
from core.ai.report import generate_report


class ReportTest(TestCase):

    def test_generate_report(self):

        report = generate_report(
            "Python",
            "Django",
            "ModuleNotFoundError"
        )

        self.assertIn("root_cause", report)
        self.assertIn("explanation", report)
        self.assertIn("possible_fixes", report)