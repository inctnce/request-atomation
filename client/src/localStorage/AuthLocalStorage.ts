function saveAuth(auth: boolean) {
  localStorage.setItem("auth", JSON.stringify(auth));
}

function setAuth(): boolean {
  const auth_data = localStorage.getItem("auth");
  if (auth_data) {
    return JSON.parse(auth_data);
  }
  return false;
}

function removeAuth() {
  localStorage.removeItem("auth");
}

type AuthLocalStorageT = {
  saveAuth(auth: boolean): void;
  setAuth(): boolean;
  removeAuth(): void;
};

const AuthLocalStorage: AuthLocalStorageT = {
  saveAuth: saveAuth,
  setAuth: setAuth,
  removeAuth: removeAuth,
};

export default AuthLocalStorage;
