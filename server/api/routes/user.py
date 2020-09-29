from flask import Blueprint, jsonify, request
from ..app import db
from ..models import User


user = Blueprint('user', __name__)


@user.route('/log_in', methods=['POST'])
def login():

    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    user_json = ()

    if user is None:
        return "Неверные имя или пароль", 400
    else:
        if (user.email == email) and (user.password == password):
            user_json = ({
                'id': user.id,
                'firstname': user.firstname,
                'lastname': user.lastname,
                'email': user.email,
                'canAddCategory': user.canAddCategory,
                'canAddProduct': user.canAddProduct,
                'password': user.password
            })

            return jsonify(user_json), 201

        return "Неверные имя или пароль", 400


@user.route('/post_user', methods=['POST'])
def add_user():
    user_data = request.get_json()

    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    email = request.get_json()['email']
    password = request.get_json()['password']
    canAddCategory = request.get_json()['canAddCategory']
    canAddProduct = request.get_json()['canAddProduct']
    bag = request.get_json()['bag']

    user = User.query.filter_by(email=email).first()
    if user:
        return "Пользователь с такими параметрами уже существует", 500

    try:
        new_user = User(
            firstname=firstname,
            lastname=lastname,
            email=email,
            password=password,
            canAddCategory=canAddCategory,
            canAddProduct=canAddProduct,
            bag=bag
        )
    except AttributeError:
        return "Ошибка при добавлении пользователя", 400

    db.session.add(new_user)
    db.session.commit()

    return "Операция выполнена", 201


@user.route('/get_users', methods=['GET'])
def load_users():
    user_list = User.query.all()
    users: list = []

    for user in user_list:
        users.append({
            'id': user.id,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'email': user.email,
            'password': user.password,
            'canAddCategory': user.canAddCategory,
            'canAddProduct': user.canAddProduct,
        })

    return jsonify(users), 201


@user.route('/del_user/<int:id>', methods=['DELETE'])
def del_user(id):
    user = User.query.filter_by(id=id).delete()
    db.session.commit()

    return "Готово", 201
