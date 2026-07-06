from django.test import TestCase
from core.rag.retriever import retrieve_context


class RetrieverTest(TestCase):

    def test_returns_context(self):

        context, sources = retrieve_context("django migration")

        self.assertIsInstance(context, str)
        self.assertIsInstance(sources, list)