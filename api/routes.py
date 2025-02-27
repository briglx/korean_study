"""Routes for the application."""

import random

from flask import jsonify, redirect, render_template, request

# from flask_login import current_user, login_user, logout_user, login_required
from api import app
from api.models import Card

ALL_CARDS = [
    Card("category1", "question1", "answer1", "user1"),
    Card("category1", "question2", "answer2", "user1"),
    Card("category1", "question3", "answer3", "user1"),
    Card("category1", "question4", "answer4", "user1"),
    Card("category1", "question5", "answer5", "user1"),
    Card("category1", "question6", "answer6", "user1"),
    Card("category1", "question7", "answer7", "user1"),
    Card("category1", "question8", "answer8", "user1"),
    Card("category1", "question9", "answer9", "user1"),
]


@app.route("/")
def index():
    """Render the index page."""
    cards = ALL_CARDS
    categories = set(list(t.category for t in cards))
    random_card = random.choice(cards)
    total_cards = len(cards)
    all_categories_len = len(categories)
    all_categories = sorted(categories)

    return render_template(
        "index.html",
        card=random_card,
        total_cards=total_cards,
        all_categories_len=all_categories_len,
        all_categories=all_categories,
    )


@app.route("/cards")
def show_cards():
    """Show all cards."""
    cards = sorted(ALL_CARDS, key=lambda card: card.category)
    return render_template("cards.html", cards=cards)


@app.route("/cards/category/<string:card_category>")
def get_card_category(card_category):
    """Get cards by category."""
    cards = [c for c in ALL_CARDS if c.category == card_category]
    print(cards)
    return render_template("cards.html", cards=cards)


@app.route("/cards/<int:card_id>")
def get_card(card_id):
    """Get card by id."""
    card = [c for c in ALL_CARDS if c.id == card_id]
    return render_template("show.html", card=card[0])


@app.route("/cards/<int:card_id>", methods=["POST"])
def edit(card_id):
    """Update card details."""
    # Get card by id.
    card = [c for c in ALL_CARDS if c.id == card_id][0]
    card.question = request.form["question"]
    card.category = request.form["category"]

    # update ALL_CARDS
    ALL_CARDS[card_id] = card

    return redirect("/")


@app.route("/cards/<int:card_id>/delete", methods=["POST"])
def delete_card(card_id):
    """Delete selected card."""
    card = [c for c in ALL_CARDS if c.id == card_id][0]

    ALL_CARDS.remove(card)
    return redirect("/")


@app.route("/api/cards")
def api_data():
    """Return API data."""
    return jsonify([card.to_dict() for card in ALL_CARDS])
