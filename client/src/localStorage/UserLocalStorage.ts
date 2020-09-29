import UserT from "../types/MainTypes/UserT";

function saveUser(user: UserT) {
  localStorage.setItem("user", JSON.stringify(user));
}

function setUser(): UserT {
  const user_data = localStorage.getItem("user");
  if (user_data) {
    return JSON.parse(user_data);
  }
  return {
    id: -1,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    canAddCategory: false,
    canAddProduct: false,
  };
}

function removeUser() {
  localStorage.removeItem("user");
}

type UserLocalStorageT = {
  saveUser(user: UserT): void;
  setUser(): UserT;
  removeUser(): void;
};

const UserLocalStorage: UserLocalStorageT = {
  saveUser: saveUser,
  setUser: setUser,
  removeUser: removeUser,
};

export default UserLocalStorage;
