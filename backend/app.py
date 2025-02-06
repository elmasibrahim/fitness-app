"""
API File
"""

from flask import Flask, request
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


@app.route("/update_weight", methods=["POST"])
def update_weight() -> dict:
    """
    Flask method for updating the weight of a exercise in the database
    {"eid" : 1, new_weight: 22.5}
    """
    data = request.get_json()
    eid = data["eid"]
    new_weight = data["new_weight"]
    exercise = Exercise.get_exercise_by_eid(eid)
    exercise.update_weight(new_weight)
    return {"message": f"Successfully updated weight of {exercise.name}"}


@app.route("/add_exercise", methods=["POST"])
def add_exercise() -> dict:
    """
    Flask function for adding a new exercise
    """
    data = request.get_json()
    muscle_group = data["muscle_group"]
    name = data["name"]
    description = data["description"]
    weight = data["weight"]
    muscle_group_ins = MuscleGroup.get_muscle_group_by_name(muscle_group)
    muscle_group_ins.new_exercise(name, description, weight)
    return {"message": "Successfully added new exercise"}


if __name__ == "__main__":
    app.run(debug=True)
