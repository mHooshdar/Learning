import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchedRoles(roles: string[] = [], userRoles: string[] = []) {
    return true;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user || {};
    return this.matchedRoles(roles, user.roles);
  }
}
