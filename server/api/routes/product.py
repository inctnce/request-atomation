from flask import Blueprint, jsonify, request
from ..models import Category, Product
from ..app import db
from datetime import datetime

product = Blueprint('product', __name__)


@product.route('/get_products')
def load_products():
    products = Product.query.all()
    product_list: list = []

    for product in products:

        product_list.append({
            'id': product.id,
            'name': product.name,
            'category_id': product.category_id,
            'specs': product.specs,
            'values': product.values,
            'price': product.price,
            'extra_info': product.extra_info,
            'creationDate': product.creationDate,
            'creator_id': product.creator_id
        })

    return jsonify(product_list)


@product.route('/post_product', methods=['POST'])
def add_product():
    product_data = request.get_json()
    now = datetime.now()
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")

    print(product_data['name'])

    try:
        new_product = Product(
            name=product_data['name'],
            category_id=product_data['category_id'],
            specs=product_data['specs'],
            values=product_data['values'],
            price=product_data['price'],
            extra_info=product_data['extra_info'],
            creationDate=date_time,
            creator_id=product_data['creator_id']
        )
    except AttributeError:
        return "Ошибка добавления товара", 400

    db.session.add(new_product)
    db.session.commit()

    product = Product.query.filter_by(name=new_product.name).first()

    product_json = ({
        'id': product.id,
        'name': product.name,
        'category_id': product.category_id,
        'specs': product.specs,
        'values': product.values,
        'price': product.price,
        'extra_info': product.extra_info,
        'creationDate': product.creationDate,
        'creator_id': product.creator_id
    })

    return jsonify(product_json), 201


@product.route('/del_product/<int:id>', methods=['DELETE'])
def del_product(id):
    product_id = request.get_json()

    try:
        Product.query.filter_by(id=id).delete()
        db.session.commit()
    except:
        return "Ошибка удаления товара", 400

    return jsonify(id), 201
