import create from "zustand";
import localforage from "localforage";
import { USERS_LIST_STORAGE, USER_STORAGE } from "../constants";
import { StoreState, User } from "./types";

const useStore = create<StoreState>((set, get) => ({
  isAppReady: false,
  userLogged: null,
  users: [],
  intializeFields: async () => {
    const userLogged = await localforage.getItem<string>(USER_STORAGE);
    const users = (await localforage.getItem<User[]>(USERS_LIST_STORAGE)) || [];

    set((state) => ({
      ...state,
      userLogged,
      users,
      isAppReady: true,
    }));
  },
  login: (username) => {
    const users = get().users;
    const hasUserAlreadyPlayed = users.find((user) => user.name === username);

    set((state) => ({ ...state, userLogged: username }));

    if (!hasUserAlreadyPlayed) {
      const newUsers = [...users, { name: username, scores: [], best: 0 }];

      set((state) => ({
        ...state,
        users: newUsers,
      }));

      localforage.setItem(USERS_LIST_STORAGE, newUsers);
    }

    localforage.setItem(USER_STORAGE, username);
  },
  logout: () => {
    set((state) => ({ ...state, userLogged: null }));

    localforage.removeItem(USER_STORAGE);
  },
  addScore: (score: number) => {
    const userLogged = get().userLogged;
    const users = get().users;

    if (userLogged) {
      const userIndex = users.findIndex((user) => user.name === userLogged);

      const payload = {
        ...users[userIndex],
        scores: [score, ...users[userIndex].scores],
        best: score > users[userIndex].best ? score : users[userIndex].best,
      };

      const updatedUsers = users.map((user) =>
        user.name === userLogged ? payload : user
      );

      set((state) => ({
        ...state,
        users: updatedUsers,
      }));

      localforage.setItem(USERS_LIST_STORAGE, updatedUsers);
    }
  },
}));

export default useStore;
