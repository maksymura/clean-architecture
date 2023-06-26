import {UserModel} from "../../../../domain/user";
import {IUsersRepo} from "../../../../adapters/dal/users";
import {ApplicationError} from "../../../errors";
import {IUseCase} from "../../interfaces";
import {CreateUserInput, CreateUserResult} from "./interface";

export class CreateUserUseCase implements IUseCase<CreateUserInput, CreateUserResult> {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    this.usersRepo = usersRepo;
  }

  async execute(input: CreateUserInput): Promise<CreateUserResult> {
    const userWithEmail = await this.usersRepo.getByEmail(input.email);

    if (userWithEmail) {
      throw new ApplicationError('User with email already exists');
    }

    const newUser = UserModel.create(input);

    await this.usersRepo.create(newUser);
  }
}