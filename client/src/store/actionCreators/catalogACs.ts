import CategoryT from "../../types/MainTypes/CategoryT";
import ProductT from "../../types/MainTypes/ProductT";
import ActionI from "../../interfaces/Action";
import ACTION from "./ACTION";

function setCategory(category: CategoryT): ActionI {
  return {
    type: ACTION.SET_CATALOG_CATEGORY,
    category: category,
  };
}

function addProductToBag(product: ProductT): ActionI {
  return {
    type: ACTION.ADD_TO_BAG,
    product: product,
  };
}

function getCategories(): ActionI {
  return {
    type: ACTION.GET_CATEGORIES,
  };
}

function getProducts(): ActionI {
  return {
    type: ACTION.GET_PRODUCTS,
  };
}

function setCategories(categories: CategoryT[]): ActionI {
  return {
    type: ACTION.SET_CATEGORIES,
    payload: categories,
  };
}

function setProducts(products: ProductT[]): ActionI {
  return {
    type: ACTION.SET_PRODUCTS,
    payload: products,
  };
}

function addCategory(category: CategoryT): ActionI {
  return {
    type: ACTION.ADD_CATEGORY,
    payload: category,
  };
}

function addProduct(product: ProductT): ActionI {
  return {
    type: ACTION.ADD_PRODUCT,
    payload: product,
  };
}

function removeCategory(category_id: number): ActionI {
  return {
    type: ACTION.REMOVE_CATEGORY,
    payload: category_id,
  };
}

function removeProduct(product_id: number): ActionI {
  return {
    type: ACTION.REMOVE_PRODUCT,
    payload: product_id,
  };
}

type CatalogACT = {
  setCategory: (category: CategoryT) => ActionI;
  addProductToBag: (product: ProductT) => ActionI;

  getCategories: () => ActionI;
  getProducts: () => ActionI;

  setCategories: (categories: CategoryT[]) => ActionI;
  setProducts: (products: ProductT[]) => ActionI;

  addCategory: (category: CategoryT) => ActionI;
  addProduct: (product: ProductT) => ActionI;

  removeCategory: (category_id: number) => ActionI;
  removeProduct: (product_id: number) => ActionI;
};

const catalogAC: CatalogACT = {
  setCategory: setCategory,
  addProductToBag: addProductToBag,
  getCategories: getCategories,
  getProducts: getProducts,

  setCategories: setCategories,
  setProducts: setProducts,

  addCategory: addCategory,
  addProduct: addProduct,

  removeCategory: removeCategory,
  removeProduct: removeProduct,
};

export default catalogAC;
