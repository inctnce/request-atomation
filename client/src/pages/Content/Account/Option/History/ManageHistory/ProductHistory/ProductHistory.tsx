import React from "react";
import style from "./ProductHistory.module.css";
import ProductT from "../../../../../../../types/MainTypes/ProductT";

type Props = {
  products: ProductT[];
  delProduct(product_id: number): void;
};

const ProductHistory: React.FC<Props> = (props: Props) => {
  const product_list: JSX.Element[] = props.products.map(
    (product: ProductT) => (
      <li key={product.id}>
        <div className={style.list_item}>
          <div className={style.category_info}>
            <div>{product.name}</div>
            {/* <div>{product.creation_date}</div> */}
          </div>
          <button
            onClick={() => props.delProduct(product.id)}
            className={style.del_btn}
          >
            Delete
          </button>
        </div>
      </li>
    )
  );

  return (
    <div>
      <h2 className={style.subtitle}>Товары</h2>
      <ul>{product_list}</ul>
    </div>
  );
};

export default ProductHistory;
