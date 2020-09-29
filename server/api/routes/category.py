from flask import Blueprint, jsonify, request
from ..models import Category, Product
from ..app import db
from datetime import datetime

category = Blueprint('category', __name__)


@category.route('/get_categories')
def load_categories():
    categories = Category.query.all()
    category_list: list = []
    for category in categories:
        category_list.append({
            'id': category.id,
            'name': category.name,
            'creationDate': category.creationDate,
            'creator_id': category.creator_id
        })

    return jsonify(category_list)


@category.route('/post_category', methods=['POST'])
def add_category():
    category_data = request.get_json()
    now = datetime.now()
    print(category_data)

    try:
        new_category = Category(
            name=category_data['name'],
            creationDate=now.strftime("%d-%b-%Y (%H:%M:%S.%f)"),
            creator_id=category_data['creator_id'])
    except AttributeError:
        return 'Ошибка добавления категории', 400

    db.session.add(new_category)
    db.session.commit()

    category = Category.query.filter_by(name=new_category.name).first()

    category_json = ({
        'id': category.id,
        'name': category.name,
        'creationDate': category.creationDate,
        'creator_id': category.creator_id
    })

    return jsonify(category_json), 201


@category.route('/del_category/<int:id>', methods=['DELETE'])
def del_category(id):

    try:
        Category.query.filter_by(id=id).delete()
        Product.query.filter_by(category_id=id).delete()
        db.session.commit()
    except:
        return "Ошибка удаления категории", 400

    return jsonify(id), 201
