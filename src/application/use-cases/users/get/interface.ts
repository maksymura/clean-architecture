import {UserModel} from "../../../../domain/user";

export type GetUserInput = {
  id: string;
}

export type GetUserResult = UserModel;

export type GetUserResponse = UserModel;