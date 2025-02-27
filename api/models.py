"""Models for the application."""

from datetime import datetime, timezone


class Card:
    """A card object."""

    id = 0
    category = ""
    question = ""
    answer = ""
    timestamp = datetime.now(timezone.utc)
    user_id = 0

    def __init__(self, category, question, answer, author):
        """Initialize a card object."""
        self.category = category
        self.question = question
        self.answer = answer
        self.author = author

        if self.timestamp.tzinfo is None:
            self.timestamp = self.timestamp.replace(tzinfo=timezone.utc)
        else:
            self.timestamp = self.timestamp.astimezone(timezone.utc)

    def __repr__(self):
        """Return a string representation of the card."""
        return f"<Card {self.id}: {self.question}>"

    def to_dict(self):
        """Return a dictionary representation of the card."""
        return {
            "id": self.id,
            "category": self.category,
            "question": self.question,
            "answer": self.answer,
            "timestamp": self.timestamp.strftime("%Y-%m-%dT%H:%M:%S"),
            "user_id": self.user_id,
        }

    def from_dict(self, data):
        """Update the card from a dictionary."""
        for field in ("category", "question", "answer"):
            if field in data:
                setattr(self, field, data[field])
