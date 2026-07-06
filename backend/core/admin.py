from django.contrib import admin
from .models import Analysis


@admin.register(Analysis)
class AnalysisAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "user",
        "language",
        "framework",
        "created_at",
    )

    list_filter = (
        "language",
        "framework",
        "created_at",
    )

    search_fields = (
        "user__username",
        "user__email",
        "language",
        "framework",
        "error",
    )

    ordering = ("-created_at",)