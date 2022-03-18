export interface User {
  name: string;
  scores: number[];
  best: number;
}

export interface StoreState {
  isAppReady: boolean;
  userLogged: string | null;
  users: User[];
  login: (username: string) => void;
  logout: () => void;
  addScore: (score: number) => void;
  intializeFields: () => void;
}
