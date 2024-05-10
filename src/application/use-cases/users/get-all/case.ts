import { IUsersRepo } from '../../../../interfaces/dal/users';
import { UserModel } from '../../../../domain/user';
import { BaseUseCase } from '../../base';

export type GetAllUsersResult = UserModel[];

export class GetAllUsersUseCase extends BaseUseCase {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    super();
    this.usersRepo = usersRepo;
  }

  async execute(): Promise<GetAllUsersResult> {
    return this.usersRepo.getAll();
  }
}
