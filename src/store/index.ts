import create from "zustand";
import { USERS_LIST_STORAGE, USER_STORAGE } from "../utils";
import localforage from "localforage";

interface User {
  name: string;
  history: number[];
  best: number;
}

export interface StoreState {
  userLogged: string | null;
  users: User[];
  login: (username: string) => void;
  logout: () => void;
  addScore: (score: number) => void;
  intializeFields: () => void;
}

const useStore = create<StoreState>((set, get) => ({
  userLogged: null,
  users: [],
  intializeFields: async () => {
    const userLogged = await localforage.getItem<string>(USER_STORAGE);
    const users = (await localforage.getItem<User[]>(USERS_LIST_STORAGE)) || [];

    set((state) => ({
      ...state,
      userLogged,
      users,
    }));
  },
  login: (username) => {
    const users = get().users;

    // Check if the user has played at least once
    const hasUserAlreadyPlayed = users.find((user) => user.name === username);

    set((state) => ({ ...state, userLogged: username }));

    if (!hasUserAlreadyPlayed) {
      const newUsers = [...users, { name: username, history: [], best: 0 }];

      set((state) => ({
        ...state,
        users: newUsers,
      }));

      localforage.setItem(USERS_LIST_STORAGE, newUsers);
    }

    localforage.setItem(USER_STORAGE, username);
  },
  logout: () => {
    localforage.removeItem(USER_STORAGE);

    set((state) => ({ ...state, userLogged: null }));
  },
  addScore: (score: number) => {
    const userLogged = get().userLogged;
    const users = get().users;

    if (userLogged) {
      const userIndex = users.findIndex((user) => user.name === userLogged);

      const payload = {
        ...users[userIndex],
        history: [score, ...users[userIndex].history],
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
