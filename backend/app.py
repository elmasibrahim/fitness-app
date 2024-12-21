"""
API File
"""

from flask import Flask

app = Flask(__name__)


@app.route("/Schulter")
def schulter() -> dict:
    """
    Function for getting shoulder exercises
    """
    return {
        "Shoulder Press": "Hanteln nach oben pressen mit Bank aufrecht",
        "Rowing": "Rückwärts am Butterfly",
    }


@app.route("/Rücken")
def ruecken() -> dict:
    """
    Function for getting back exercises
    """
    return {
        "Latzug": "Zwei Griffe nach unten ziehen",
        "Cable Row": "Sitzen und Dreieck nach hinten ziehen",
    }


@app.route("/Brust")
def brust() -> dict:
    """
    Function for getting chest exercises
    """
    return {
        "Brustpresse": "Am Gerät aufrecht Griffe nach vorne drücken",
        "Butterfly": "Am Gerät, isoliert",
    }


@app.route("/Bizeps")
def bizeps() -> dict:
    """
    Function for getting bizeps exercises
    """
    return {"Hammer Curls": "Hanteln vertikal", "Preacher Curls": "Hanteln horizontal"}


@app.route("/Trizeps")
def trizeps() -> dict:
    """
    Function for getting trizeps exercises
    """
    return {
        "Trizeps Pushdowns": "Kabelozug nach unten ziehen",
        "Trizepsdrücken": "An der Maschine Griffe nach vorne",
    }


@app.route("/Beine")
def beine() -> dict:
    """
    Function for getting leg exercises
    """
    return {
        "Ausfallschritt": "Mit Hanteln an beiden Händen",
        "Beinpresse": "Aufrecht sitzen",
    }


@app.route("/Core")
def core() -> dict:
    """
    Function for getting core exercises
    """
    return {
        "Plank": "Gerader Rücken, Ellenbogen auf Schulterhöhe",
        "Crunches": "Beine im 90 Grad-Winkel",
    }


if __name__ == "__main__":
    app.run(debug=True)
