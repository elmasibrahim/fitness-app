"""
Module containing the MuscleGroup ORM class
"""

from typing import Type
from db import DB
from exercise import Exercise


class MuscleGroup:
    """
    ORM class
    """

    @classmethod
    def get_muscle_group_by_name(cls, name: str) -> Type["MuscleGroup"]:
        """
        Class method for getting a MuscleGroup instance by the name of the muscle group
        """
        query = "SELECT mid FROM muscleGroup WHERE name = %s"
        params = (name,)
        data = DB.fetch(query, params)
        mid = data[0][0]
        instance = cls(mid, name)
        return instance

    def __init__(self, mid: int, name: str):
        self.__mid = mid
        self.__name = name
        self.__exercises = []

    @property
    def exercises(self) -> list[Exercise]:
        """
        Property method for getting the exercises member
        """
        return self.__exercises

    def add_exercises(self) -> None:
        """
        Method for adding the muscle group's existing exercises to the self.__exercises list
        """
        query = "SELECT eid, name, description, weight FROM exercise WHERE mid = %s"
        params = (self.__mid,)
        data = DB.fetch(query, params)
        for item in data:
            eid, name, description, weight = item
            instance = Exercise(eid, name, description, weight)
            self.__exercises.append(instance)

    def new_exercise(self, name: str, description: str, weight: float) -> None:
        """
        Method for adding a new exercise to the muscle group's exercises
        """
        query = "INSERT INTO exercise(mid, name, description, weight) VALUES (%s, %s, %s, %s)"
        params = (self.__mid, name, description, weight)
        DB.action(query, params)
