"""
API File
"""

from flask import Flask
from flask_cors import CORS
from exercise import Exercise
from muscle_group import MuscleGroup

app = Flask(__name__)
CORS(app)


@app.route("/<muscle_group>")
def exercises(muscle_group: str) -> list:
    """
    Flask function for getting the exercises of a muscle group
    """
    ins = MuscleGroup.get_muscle_group_by_name(muscle_group)
    ins.add_exercises()
    data = [exercise.eid for exercise in ins.exercises]
    return data


@app.route("/exercise/<int:eid>")
def exercise_details(eid: int) -> dict:
    """
    Flask function for getting detailled information about a exercise
    """
    exercise = Exercise.get_exercise_by_eid(eid)
    data = {
        "name": exercise.name,
        "description": exercise.description,
        "weight": exercise.weight,
    }
    return data


if __name__ == "__main__":
    app.run(debug=True)
