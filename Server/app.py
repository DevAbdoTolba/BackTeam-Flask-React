from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
import sqlite3

con = sqlite3.connect("data.db")
cur = con.cursor()


data = [{}]

app = Flask(__name__)

@app.route("/users")
@cross_origin(supports_credentials=True)
def App():
    
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    

    cur.execute("SELECT * FROM users")
    data = cur.fetchall()

    # convert data to dictonary with name, lastname, gmail, score, phone, g, regnum, discordid, town
    data = [{"name": row[0], "lastname": row[1], "gmail": row[2], "score": row[3], "phone": row[4], "g": row[5], "regnum": row[7], "discordid": row[8], "town": row[9]} for row in data]
                                                                                                            # row[7] is Password so NO don't show it :/
    return data


# Open account data
@app.route('/user')
@cross_origin(supports_credentials=True)
def user():
    regnum = request.args.get('regnum')

    con = sqlite3.connect("data.db")
    cur = con.cursor()

    # Search for the regNum in the database
    cur.execute("SELECT * FROM users WHERE regnum=?", (regnum,))
    data = cur.fetchall()
    # convert data to dictonary with name, lastname, gmail, score, phone, g, regnum, discordid, town
    data = [{"name": row[0], "lastname": row[1], "gmail": row[2], "score": row[3], "phone": row[4], "g": row[5], "regnum": row[7], "discordid": row[8], "town": row[9]} for row in data]
    return data

@app.route('/exist')
@cross_origin(supports_credentials=True)
def exist():
    regnum = request.args.get('regnum')
    password = request.args.get('password')


    con = sqlite3.connect("data.db")
    cur = con.cursor()
    # fetch all data
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    # convert data to dictonary with name, lastname, gmail, score, phone, g, regnum, discordid, town
    data = [{"name": row[0], "lastname": row[1], "gmail": row[2], "score": row[3], "phone": row[4], "g": row[5], "password" : row[6],"regnum": row[7], "discordid": row[8], "town": row[9]} for row in data]


    # for loob all rows in data and check if regnum exist
    for row in data:
        if int(row["regnum"]) == int(regnum):
            print(row["password"])
            print(password)

            if row["password"] == password:
                return "True"
            else:
                return "Password is incorrect"
    return "False"

@app.route('/events')
@cross_origin(supports_credentials=True)
def events():
    # get data from json file Events.json
    with open('Events.json') as json_file:
        data = json.load(json_file)
        return data
        



# # Login
# @app.route('/login')
# @cross_origin(supports_credentials=True)
# def login():
#     print(regnum)
#     print(password)
#     print(password(regnum))

#     if password(regnum):
#         return "True"
#     return "Password is incorrect"


# check password for the regitered user
def password(regnum, password):


    con = sqlite3.connect("data.db")
    cur = con.cursor()
    # fetch all data
    cur.execute("SELECT * FROM users")
    data = cur.fetchall()
    # convert data to dictonary with name, lastname, gmail, score, phone, g, regnum, discordid, town
    data = [{"name": row[0], "lastname": row[1], "gmail": row[2], "score": row[3], "phone": row[4], "g": row[5], "password" : row[6], "regnum": row[7], "discordid": row[8], "town": row[9]} for row in data]


    # for loob all rows in data and check if regnum exist
    for row in data:
        if int(row["regnum"]) == int(regnum):
            if row["password"] == password:
                return true
    return false



























# add data
def add_data(name, age, score):
    con = sqlite3.connect("data.db")
    cur = con.cursor()

    cur.execute("INSERT INTO users VALUES (?, ?, ?)", (name, age, score))
    con.commit()
    return "data added"

# delete data
def delete_data(name):
    con = sqlite3.connect("data.db")
    cur = con.cursor()

    cur.execute("DELETE FROM users WHERE name=?", (name,))
    con.commit()
    return "data deleted"

# update data
def update_data(name, age, score):
    con = sqlite3.connect("data.db")
    cur = con.cursor()

    cur.execute("UPDATE users SET age=?, score=? WHERE name=?", (age, score, name))
    con.commit()
    return "data updated"




if __name__ == "__main__":
    app.run(debug=True)
    classflask_cors.CORS(app=None, **kwargs)

