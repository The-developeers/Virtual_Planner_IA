from flask import request, jsonify
from ..services.user_service import register_user, login_user

def init_routes(app):
    @app.route('/register', methods=['POST'])
    def register():
        data = request.json
        username = data.get('username')
        password = data.get('password')
        return register_user(username, password)

    @app.route('/login', methods=['POST'])
    def login():
        data = request.json
        username = data.get('username')
        password = data.get('password')
        return login_user(username, password)