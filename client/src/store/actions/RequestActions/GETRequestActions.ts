import Axios from "axios";
import CategoryT from "../../../types/MainTypes/CategoryT";
import StateT from "../../../types/StateT";

async function getRequest(state: StateT) {
  setTimeout(() => {
    const response = {
      file: "http://127.0.0.1:5000/get_demand",
    };
    // server sent the url to the file!
    // now, let's download:
    window.open(response.file);
    // you could also do:
    // window.location.href = response.file;
  }, 100);
  state.bagPage.didSendRequest = false;
}

const AllCategory: CategoryT = {
  id: -1,
  name: "Все",
  creation_date: "",
  creator_id: -1,
};

async function getCategoriesAndProducts(state: StateT): Promise<void> {
  state.categories = [
    ...(await Axios.get("/get_categories").then((response) => {
      return response.data;
    })),
  ];
  state.categories.push(AllCategory);

  // for (let category of state.categories) {
  //   console.log(category.creation_date);
  // }

  state.products = [
    ...(await Axios.get("/get_products").then((response) => {
      return response.data;
    })),
  ];
  console.log("PRODUCTS", state.products);

  console.log("CATEGORIES", state.categories);
}

type GETActionT = {
  getCategoriesAndProducts: (state: StateT) => void;
  getRequest: (state: StateT) => Promise<void>;
};

const GETAction: GETActionT = {
  getCategoriesAndProducts: getCategoriesAndProducts,
  getRequest: getRequest,
};

export default GETAction;
