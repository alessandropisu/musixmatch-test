import { StoreState } from "./index";

const userInfoSelector = (store: StoreState) =>
  store.users.find((user) => user.name === store.userLogged);

const sortedUsersSelector = (store: StoreState) =>
  store.users.sort((a, b) => b.best - a.best);

export { userInfoSelector, sortedUsersSelector };
