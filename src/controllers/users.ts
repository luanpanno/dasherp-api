import { Request, Response } from 'express';

import { usersService } from '@/services/users';

type CreateUserBody = {
  name: string;
  email: string;
  password: string;
};

class UsersController {
  async listUsers(req: Request, res: Response): Promise<void> {
    try {
      const data = await usersService().listUsers();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  }

  async createUser(req: Request<CreateUserBody>, res: Response): Promise<void> {
    try {
      const data = await usersService().createUser(req.body);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  }
}

export const usersController = () => new UsersController();
