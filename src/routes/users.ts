import { Router } from 'express';

import { usersController } from '@/controllers/users';

export default (router: Router): void => {
  router.get('/users', usersController().listUsers);

  router.post('/users', usersController().createUser);
};
