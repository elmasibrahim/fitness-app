"""
API File
"""

from flask import Flask
from flask_cors import CORS
from muscle_group import MuscleGroup

app = Flask(__name__)
CORS(app)


@app.route("/<muscle_group>")
def exercises(muscle_group: str) -> list:
    """
    Flask method for getting the exercises of a muscle group
    """
    ins = MuscleGroup.get_muscle_group_by_name(muscle_group)
    ins.add_exercises()
    data = [exercise.eid for exercise in ins.exercises]
    return data


if __name__ == "__main__":
    app.run(debug=True)
