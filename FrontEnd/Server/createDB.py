import sqlite3
import json

def read_data():
    with open('BackTeam.json') as json_file:
        data = json.load(json_file)
        return data

con = sqlite3.connect("data.db")
cur = con.cursor()

cur.execute("""CREATE TABLE users (
        name TEXT,
        lastname TEXT,
        gmail TEXT,
        score INTEGER,
        phone TEXT,
        g TEXT,
        password TEXT,
        regnum INTEGER PRIMARY KEY,
        discordid TEXT,
        town TEXT
    )""")



data = read_data()
data.sort(key=lambda x: x['name'])

# add all data to the database
for user in data:
    cur.execute("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)", (user["name"], user["lastname"], user["gmail"], user["score"], user["phone"], user["g"], user["password"], user["regnum"], user["discordid"], user["town"]))

con.commit()


