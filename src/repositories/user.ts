import { dbConnection } from '@/config/db';

import { CreateUserDto, PgUser, User } from '@/domain/entities/user';

class UserRepository {
  repository = dbConnection.getRepository(PgUser);

  async list(): Promise<User[]> {
    const data = await this.repository.find();

    return data;
  }

  async create(user: CreateUserDto): Promise<User> {
    const data = await this.repository.save(user);

    return data;
  }
}

export const userRepository = () => new UserRepository();
