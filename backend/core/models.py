from django.db import models
from django.contrib.auth.models import User


class Analysis(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="analyses"
    )

    language = models.CharField(max_length=50)

    framework = models.CharField(max_length=50)

    error = models.TextField()

    report = models.JSONField()

    log_file = models.FileField(
        upload_to="logs/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.user.username} - {self.language} ({self.created_at.strftime('%d-%m-%Y %H:%M')})"