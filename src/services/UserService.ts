import { users } from "@/utils/usersDb";

export default class UserService {
  static async validateUser(login: string, password: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = users.find(
          (user) => user.login === login && user.password === password
        );
        resolve(result);
      }, 1000);
    });
  }
}
