import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/public.decorator';
import UserContext from './models/user.context';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
  constructor(private reflector: Reflector) {
    super();
  }

  public async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    await super.canActivate(context);

    const { user }: UserContext = context.switchToHttp().getRequest();

    return user ? true : false;
  }

  public handleRequest<UserEntity>(err: unknown, user: UserEntity): UserEntity {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
