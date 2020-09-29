"""empty message

Revision ID: 976856ad9c3a
Revises: 7501e67eb8bb
Create Date: 2020-08-20 08:54:33.065342

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '976856ad9c3a'
down_revision = '7501e67eb8bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bags',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.drop_column('user', 'bag')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('bag', sa.BLOB(), nullable=False))
    op.drop_table('bags')
    # ### end Alembic commands ###
