# source venv/bin/activate
# export FLASK_APP=app.py
# export FLASK_DEBUG=1

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:password@localhost/spbu_automation_app"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["CLIENT_FILES"] = "/request_files"

    db.init_app(app)

    from .routes.category import category
    from .routes.product import product
    from .routes.user import user
    from .routes.demand.demand import demand

    app.register_blueprint(category)
    app.register_blueprint(product)
    app.register_blueprint(user)
    app.register_blueprint(demand)

    migrate = Migrate(app, db)

    return app
