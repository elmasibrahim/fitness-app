"""
Module containing the Exercise ORM class
"""

from typing import Type
from db import DB


class Exercise:
    """
    ORM class
    """

    @classmethod
    def get_exercise_by_eid(cls, eid: int) -> Type["Exercise"]:
        """
        Class method for getting a exercise by eid
        """
        query = "SELECT name, description, weight FROM exercise WHERE eid = %s"
        params = (eid,)
        data = DB.fetch(query, params)
        name, description, weight = data[0]
        instance = cls(eid, name, description, weight)
        return instance

    def __init__(self, eid: int, name: str, desc: str, weight: float):
        self.__eid = eid
        self.__name = name
        self.__description = desc
        self.__weight = weight

    @property
    def eid(self) -> int:
        """
        Property method for getting the eid member
        """
        return self.__eid

    @property
    def name(self) -> str:
        """
        Property method for getting the name member
        """
        return self.__name

    @property
    def description(self) -> str:
        """
        Property method for getting the description member
        """
        return self.__description

    @property
    def weight(self) -> float:
        """
        Property method for getting the weight member
        """
        return self.__weight
