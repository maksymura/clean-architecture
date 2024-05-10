import { DomainError } from './errors';

export type UserProperties = { name: string; email: string };

export class UserModel {
  private readonly id?: string;
  private readonly name: string;
  private readonly email: string;
  private static allowedEmailProviders = ['gmail', 'yahoo'];

  constructor({ name, email }: UserProperties, id?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public static create(
    { name, email }: UserProperties,
    id?: string
  ): UserModel {
    if (!name || !email) {
      throw new DomainError('Invalid create properties');
    }

    const [, provider] = email.split('@');

    if (!this.allowedEmailProviders.includes(provider)) {
      throw new DomainError('Email provider not allowed');
    }

    return new UserModel({ name, email }, id);
  }

  public getId(): string | undefined {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getEmailProvider() {
    const [, provider] = this.email.split('@');

    return provider;
  }
}
