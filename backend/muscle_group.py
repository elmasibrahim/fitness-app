"""
Module containing the MuscleGroup ORM class
"""


class MuscleGroup:
    """
    ORM class
    """

    def __init__(self, mid: int, name: str):
        self.__mid = mid
        self.__name = name
        self.__exercises = []
