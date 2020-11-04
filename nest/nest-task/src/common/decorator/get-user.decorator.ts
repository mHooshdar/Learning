import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from 'src/auth/user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): UserEntity => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    return data ? user && user[data] : user;
  },
);
