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

    @staticmethod
    def action(query: str, params: tuple = None) -> None:
        """
        Static method for executing a query without getting data back
        """
        connection = DB.create_connection()
        cursor = connection.cursor()
        cursor.execute(query, params)
        connection.commit()
        cursor.close()
        connection.close()

    @staticmethod
    def fetch(query: str, params: tuple = None) -> list[tuple]:
        """
        Static method for querying data from the database and returning all received tuples
        """
        connection = DB.create_connection()
        cursor = connection.cursor()
        cursor.execute(query, params)
        data = cursor.fetchall()
        cursor.close()
        connection.close()
        return data
