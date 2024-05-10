import { IUsersRepo } from '../../../../interfaces/dal/users';
import { ApplicationError } from '../../../errors';
import { UserModel } from '../../../../domain/user';
import { BaseUseCase } from '../../base';

export type GetUserInput = {
  id: string;
};

export type GetUserResult = UserModel;

export class GetUserUseCase extends BaseUseCase {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    super();
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
