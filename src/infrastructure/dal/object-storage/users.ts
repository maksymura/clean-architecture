import {UserModel, UserProperties} from "../../../domain/user";
import {IUsersRepo} from "../../../adapters/dal/users";

const data: Record<string, {id: string; name: string; email: string}> = {
  '1': { id: '1',  name: 'Max', email: 'max@gmail.com' },
  '2': {id: '2', name: 'Katya', email: 'katya@gmail.com'}
}

export class ObjectStorageUsersRepo implements IUsersRepo {
  async get(id: string): Promise<UserModel | undefined> {
    const user = data[id];

    if (user) {
      return new UserModel(user);
    }
  }

  async create(user: UserModel): Promise<void> {
    const id = (Object.keys(data).length + 1).toString();

    data[id] = {id, name: user.getName(), email: user.getEmail()};
  }

  async getByEmail(email:string): Promise<UserModel | undefined> {
    const key = Object.keys(data).find((key) => data[key].email === email);

    if (key) {
      return new UserModel(data[key]);
    }
  };

  async getAll(): Promise<UserModel[]> {
    return Object.keys(data).map((key) => new UserModel(data[key], data[key].id));
  }
}