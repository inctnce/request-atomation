import React from "react";
import ProductT from "../../../../../types/MainTypes/ProductT";
import style from "./ProductCard.module.scss";
import mainStyle from "../../../../../index.module.scss";
import { NavLink } from "react-router-dom";

type RowT = {
  key: number;
  spec: string;
  val: string;
};

type Props = {
  product: ProductT;
  addProductToBag(product: ProductT): void;
};

const ProductCard: React.FC<Props> = (props) => {
  const buttonStyle: string = mainStyle.button + " " + style.to_bag_btn;
  const cardStyle: string = mainStyle.card + " " + style.card;

  const rows: RowT[] = [];
  for (let i = 0; i < 3; i++) {
    rows.push({
      key: i,
      spec: props.product.specs[i],
      val: props.product.values[i],
    });
  }

  let row_elements: JSX.Element[] = rows.map((row: RowT) => (
    <tr key={row.key}  className={style.row}>
      <td className={style.field}>{row.spec}</td>
      <td className={style.field}>{row.val}</td>
    </tr>
  ));

  return (
    <div className={cardStyle}>
      <NavLink className={style.link} to={"/product/" + props.product.id}>
        <h3 className={style.title}>{props.product.name}</h3>
      </NavLink>
      <div>
        <table className={style.specs_table}>
          <tbody>{row_elements}</tbody>
        </table>
      </div>
      <div className={style.price_field}>Цена: {props.product.price} руб.</div>
      <button
        onClick={() => props.addProductToBag(props.product)}
        className={buttonStyle}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
