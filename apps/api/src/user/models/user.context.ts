import { Request } from 'express';
import { UserEntity } from '../entities/user.entity';

interface UserContext extends Request {
  user: UserEntity;
}

export default UserContext;
