import {UserModel} from "../../domain/user";

export interface IUsersRepo {
  get(id: string): Promise<UserModel | undefined>
  create(data: UserModel): Promise<void>
  getAll(): Promise<UserModel[]>
  getByEmail(email: string): Promise<UserModel | undefined>
}