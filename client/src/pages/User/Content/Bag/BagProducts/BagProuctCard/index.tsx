import React from "react";
import ProductT from "../../../../../../types/MainTypes/ProductT";
import style from "./style.module.scss";

type RowT = {
  spec: string;
  val: string;
};

type Props = {
  index: number;
  qty_field_value: string;
  cost_field_value: string;
  product: ProductT;
  removeFromBag(id: number): void;
  updQtyValue(value: number, product_price: number, index: number): void;
};

const ProductCard: React.FC<Props> = (props: Props) => {
  const qtyRef: React.RefObject<HTMLInputElement> = React.createRef();

  const rows: RowT[] = [];
  for (let i = 0; i < props.product.specs.length; i++) {
    rows.push({ spec: props.product.specs[i], val: props.product.values[i] });
  }

  let row_elements: JSX.Element[] = rows.map((row: RowT) => (
    <tr>
      <td className={style.field}>{row.spec}</td>
      <td className={style.field}>{row.val}</td>
    </tr>
  ));

  return (
    <tr>
      <td className={style.td}>
        <div className={style.title}>{props.product.name}</div>
        <table className={style.specs_table}>
          <tbody>{row_elements}</tbody>
        </table>
      </td>
      <td className={style.td}>{props.product.price}</td>
      <td className={style.td}>
        <input
          className={style.quantity_picker}
          min="1"
          type="number"
          ref={qtyRef}
          value={props.qty_field_value}
          onChange={() =>
            props.updQtyValue(
              Number(qtyRef.current!.value),
              props.product.price,
              props.index
            )
          }
        />
      </td>
      <td className={style.td}>{props.cost_field_value}</td>
      <td>
        <button
          onClick={() => props.removeFromBag(props.product.id)}
          className={style.button}
        ></button>
      </td>
    </tr>
  );
};

export default ProductCard;
