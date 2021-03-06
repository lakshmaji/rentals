import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from './user/entities/user.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
