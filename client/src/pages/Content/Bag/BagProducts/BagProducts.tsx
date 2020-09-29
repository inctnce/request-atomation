import React from "react";
import style from "./BagProducts.module.scss";

import ProductT from "../../../../types/MainTypes/ProductT";

import BagProductCard from "./BagProuctCard/BagProductCard";

type Props = {
  products: ProductT[];
  qty_field_values: number[];
  cost_field_values: number[];
  removeFromBag(id: number): void;
  updQtyValue(value: number, product_price: number, index: number): void;
};

const BagProducts: React.FC<Props> = (props: Props) => {

  const product_elements: JSX.Element[] = [];
  for (let i = 0; i < props.products.length; i++) {
    product_elements.push(
      <BagProductCard
        index={i}
        qty_field_value={props.qty_field_values[i].toString()}
        cost_field_value={props.cost_field_values[i].toString()}
        product={props.products[i]}
        removeFromBag={props.removeFromBag}
        updQtyValue={props.updQtyValue}
      />
    );
  }

  return (
    <div>
      <h3 className={style.label}>Товары</h3>
      <div className={style.products_table}>
        <table className={style.table}>
          <thead>
            <tr>
              <td className={style.td}>
                <b>Товар</b>
              </td>
              <td className={style.td}>
                <b>Цена</b>
              </td>
              <td className={style.td}>
                <b>Количество</b>
              </td>
              <td className={style.td}>
                <b>Стоимость</b>
              </td>
            </tr>
          </thead>
          <tbody>{product_elements}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BagProducts;
