import BagLocalStorage from "../../localStorage/BagLocalStorage";
import CategoryT from "../../types/MainTypes/CategoryT";
import ProductT from "../../types/MainTypes/ProductT";
import StateT from "../../types/StateT";

function setIsFetching(state: StateT): void {
  if (state.catalogPage.isFetching === true) {
    state.catalogPage.isFetching = false;
  } else {
    state.catalogPage.isFetching = true;
  }
}

function setCatalogCategory(state: StateT, category: CategoryT): void {
  state.catalogPage.current_category = { ...category };
  console.log("Current category is:", state.catalogPage.current_category.id);
}

function addProductToBag(state: StateT, product: ProductT): void {
  // POSTAction.PostProductToBag(state.current_user.id, product.id);

  for (let i = 0; i < state.bag.length; i++) {
    if (product.id === state.bag[i].id) {
      state.bagPage.qty_field_values[i]++;
      state.bagPage.cost_field_values[i] =
        state.bagPage.qty_field_values[i] * product.price;

      alert(`The product ${product.name} is in your cart`);
      return;
    }
  }

  state.bag.push(product);
  state.bagPage.qty_field_values.push(1);
  state.bagPage.cost_field_values.push(product.price);
  alert(`The product ${product.name} is in your cart`);

  BagLocalStorage.removeBag();
  BagLocalStorage.saveBag(
    state.bag,
    state.bagPage.qty_field_values,
    state.bagPage.cost_field_values
  );
}

type catalogActionT = {
  isFetchingCatalog: (state: StateT, value: boolean) => void;
  setCategory: (state: StateT, category: CategoryT) => void;
  addProductToBag: (state: StateT, product: ProductT) => void;
};

const catalogAction: catalogActionT = {
  isFetchingCatalog: setIsFetching,
  setCategory: setCatalogCategory,
  addProductToBag: addProductToBag,
};

export default catalogAction;
