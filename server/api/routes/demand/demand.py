from flask import Blueprint, jsonify, request, send_from_directory, abort

from .demand_to_docx import demand_to_docx
from api.models import Product

demand = Blueprint('demand', __name__)


@demand.route('/post_demand', methods=['POST'])
def post_demand():
    products_data = request.json["products"]
    quantity_data = request.json["quantities"]
    cost_data = request.json["costs"]
    info_data = request.json["info"]

    product_list = []
    for product in products_data:
        product_list.append(Product(
            name=product["name"],
            category_id=product["category_id"],
            specs=product["specs"],
            values=product["values"],
            extra_info=product["extra_info"],
            price=product["price"]
        ))

    quantity_list = []
    for quantity in quantity_data:
        quantity_list.append(quantity)

    cost_list = []
    for cost in cost_data:
        cost_list.append(cost)

    info_list = []
    for info in info_data:
        info_list.append(info)

    demand_to_docx(product_list, quantity_list, cost_list, info_list)

    return "Готово", 201


@demand.route("/get_demand")
def get_request():
    try:
        return send_from_directory(
            "request_files", filename="simple_test_python.docx", as_attachment=True
        )
    except FileNotFoundError:
        abort(404)
