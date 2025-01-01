"""
Module containing the MuscleGroup ORM class
"""

from typing import Type
from db import DB


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
