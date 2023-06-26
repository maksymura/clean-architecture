import {IUsersRepo} from "../../../../adapters/dal/users";
import {IUseCase} from "../../interfaces";
import {GetAllUsersInput, GetAllUsersResult} from "./interface";

export class GetAllUsersUseCase implements IUseCase<GetAllUsersInput, GetAllUsersResult> {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    this.usersRepo = usersRepo;
  }

  async execute(input: GetAllUsersInput): Promise<GetAllUsersResult> {
    return this.usersRepo.getAll();
  }
}