import { IUser } from "@/types/user.interface";
import { makeAutoObservable } from "mobx";

class UserStore {
  user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);

    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user")!) as IUser;
    }
  }

  addValidUser = (user: IUser) => {
    this.user = user;
  };
}

export default new UserStore();
