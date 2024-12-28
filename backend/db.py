"""
Module for database operations
"""

from mysql.connector import connect
from mysql.connector.connection import MySQLConnection


class DB:
    """
    Class which contains methods for database operations
    """

    @staticmethod
    def create_connection() -> MySQLConnection:
        """
        Static method for creating a connection to the database
        """
        connection = connect(
            host="localhost", user="fitness", password="fitness", database="fitnessApp"
        )
        return connection
