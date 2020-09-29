import React from "react";
import CategoryT from "../../../../../types/MainTypes/CategoryT";
import ProductT from "../../../../../types/MainTypes/ProductT";

import ProductCard from "./ProuctCard";

type Props = {
  category: CategoryT;
  products: ProductT[];
  addProductToBag(product: ProductT): void;
};

const Category: React.FC<Props> = (props) => {
  let products: ProductT[] = [];

  if (props.category.name === "Все") {
    products = props.products;
  } else {
    for (let i = 0; i < props.products.length; i++) {
      if (props.category.id === props.products[i].category_id) {
        products.push(props.products[i]);
      }
    }
  }

  let products_components = products.map((product: ProductT) => (
    <ProductCard
      key={product.id}
      product={product}
      addProductToBag={props.addProductToBag}
    />
  ));

  return <div>{products_components}</div>;
};

export default Category;
