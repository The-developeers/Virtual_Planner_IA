from bson import ObjectId

class User:
	def __init__(self, username, password):
		self.username = username
		self.password = password

	def to_dict(self):
		return {
			"username": self.username,
			"password": self.password
		}