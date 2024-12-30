"""
Module containing the Exercise ORM class
"""


class Exercise:
    """
    ORM class
    """

    def __init__(self, eid: int, name: str, desc: str, weight: float):
        self.__eid = eid
        self.__name = name
        self.__description = desc
        self.__weight = weight
