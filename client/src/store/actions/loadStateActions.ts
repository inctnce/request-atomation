import CategoryT from "../../types/MainTypes/CategoryT";
import StateT from "../../types/StateT";

function findCategory(state: StateT, category_id: number): CategoryT {
  for (let i = 0; i < state.categories.length; i++) {
    if (state.categories[i].id === category_id) {
      return state.categories[i];
    }
  }

  return {
    id: -100,
    name: "Didn't find",
    creation_date: "",
    creator_id: -1000,
  };
}

function pushAllCategory(state: StateT): void {
  state.categories.push({
    id: -1,
    name: "Все",
    creation_date: "",
    creator_id: -1,
  });
}

type loadStateActionT = {
 
};

const loadStateAction: loadStateActionT = {
 
};

export default loadStateAction;
