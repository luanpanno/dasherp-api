import { userRepository } from '@/repositories/user';

import { CreateUserDto, User } from '@/domain/entities/user';

class UsersService {
  userRepository = userRepository();

  async listUsers(): Promise<User[]> {
    const data = await this.userRepository.list();

    return data;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const data = await this.userRepository.create(user);

    return data;
  }
}

export const usersService = () => new UsersService();
