import ProductT from "../types/MainTypes/ProductT";

function saveBag(bag: ProductT[], quantites: number[], costs: number[]): void {
  localStorage.setItem("bag", JSON.stringify(bag));
  localStorage.setItem("quantities", JSON.stringify(quantites));
  localStorage.setItem("costs", JSON.stringify(costs));
}

function setBagProducts(): ProductT[] {
  const bag_data = localStorage.getItem("bag");
  if (bag_data) {
    return JSON.parse(bag_data);
  }
  return [];
}

function setBagQuantities(): number[] {
  const quantites_data = localStorage.getItem("quantities");
  if (quantites_data) {
    return JSON.parse(quantites_data);
  }
  return [];
}

function setBagCosts(): number[] {
  const costs_data = localStorage.getItem("costs");
  if (costs_data) {
    return JSON.parse(costs_data);
  }
  return [];
}

function removeBag(): void {
  localStorage.removeItem("bag");
  localStorage.removeItem("quantities");
  localStorage.removeItem("costs");
}

type BagLocalStorageT = {
  saveBag(bag: ProductT[], quantites: number[], costs: number[]): void;
  setBagProducts(): ProductT[];
  setBagQuantities(): number[];
  setBagCosts(): number[];
  removeBag(): void;
};

const BagLocalStorage: BagLocalStorageT = {
  saveBag: saveBag,
  setBagProducts: setBagProducts,
  setBagQuantities: setBagQuantities,
  setBagCosts: setBagCosts,
  removeBag: removeBag,
};

export default BagLocalStorage;
