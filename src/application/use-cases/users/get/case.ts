import {IUsersRepo} from "../../../../adapters/dal/users";
import {ApplicationError} from "../../../errors";
import {IUseCase} from "../../interfaces";
import {GetUserInput, GetUserResult} from "./interface";

export class GetUserUseCase implements IUseCase<GetUserInput, GetUserResult> {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    this.usersRepo = usersRepo;
  }

  async execute(input: GetUserInput): Promise<GetUserResult> {
    const user = await this.usersRepo.get(input.id);

    if (!user) {
      throw new ApplicationError('User not found');
    }

    return user;
  }
}