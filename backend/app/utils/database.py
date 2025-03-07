from pymongo import MongoClient

connection_string = "mongodb+srv://developer:xfVsCWmaLDRbJRh9@planner.gb4bt.mongodb.net/?retryWrites=true&w=majority&appName=planner"

client = MongoClient(connection_string)

db = client['mydatabase']

users_collection = db['users']
