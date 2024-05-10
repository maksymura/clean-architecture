import { UserModel } from '../../../../domain/user';
import { IUsersRepo } from '../../../../interfaces/dal/users';
import { ApplicationError } from '../../../errors';
import { BaseUseCase } from '../../base';

export type CreateUserInput = {
  name: string;
  email: string;
};
export type CreateUserResult = void;

export class CreateUserUseCase extends BaseUseCase {
  private usersRepo: IUsersRepo;

  constructor(usersRepo: IUsersRepo) {
    super();
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
