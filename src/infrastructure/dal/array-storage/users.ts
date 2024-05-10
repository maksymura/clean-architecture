import { UserModel } from '../../../domain/user';
import { IUsersRepo } from '../../../interfaces/dal/users';

const data = [
  { id: '1', name: 'Max', email: 'max@gmail.com' },
  { id: '2', name: 'Katya', email: 'katya@gmail.com' },
];

export class ArrayStorageUsersRepo implements IUsersRepo {
  async get(id: string): Promise<UserModel | undefined> {
    const user = data.find((user) => user.id === id);

    if (user) {
      return new UserModel(user);
    }
  }

  async create(user: UserModel): Promise<void> {
    const id = (Object.keys(data).length + 1).toString();

    data.push({ id, name: user.getName(), email: user.getEmail() });
  }

  async getByEmail(email: string): Promise<UserModel | undefined> {
    const user = data.find((user) => user.email === email);

    if (user) {
      return new UserModel(user);
    }
  }

  async getAll(): Promise<UserModel[]> {
    return data.map((user) => new UserModel(user, user.id));
  }
}
