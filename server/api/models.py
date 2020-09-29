from .app import db

bags = db.Table('bags',
                db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
                db.Column('product_id', db.Integer,
                          db.ForeignKey('product.id'))
                )

demands = db.Table('demands',
                   db.Column('product_id', db.Integer,
                             db.ForeignKey('product.id')),
                   db.Column('demand_id', db.Integer,
                             db.ForeignKey('demand.id'))
                   )


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    email = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))
    canAddCategory = db.Column(db.Boolean)
    canAddProduct = db.Column(db.Boolean)
    bag = db.relationship('Product', secondary=bags,
                          backref=db.backref('products_in_bag'))


class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    creationDate = db.Column(db.String(100))
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    specs = db.Column(db.PickleType)
    values = db.Column(db.PickleType)
    price = db.Column(db.Integer)
    extra_info = db.Column(db.String(500))
    creationDate = db.Column(db.String(100))
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Demand(db.Model):
    __tablename__ = 'demand'
    id = db.Column(db.Integer, primary_key=True)
    products = db.relationship('Product', secondary=demands,
                               backref=db.backref('sent_products'))
    costs = db.Column(db.PickleType)
    quantities = db.Column(db.PickleType)
    info = db.Column(db.PickleType)
