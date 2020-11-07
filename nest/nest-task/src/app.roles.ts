import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  BOARD_USER = 'BOARD_USER',
  ADMIN = 'ADMIN',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.BOARD_USER) // define new or modify existing role. also takes an array.
  .createOwn('board') // equivalent to .createOwn('video', ['*'])
  .deleteOwn('board')
  .readAny('board')
  .grant(AppRoles.ADMIN) // switch to another role without breaking the chain
  .extend(AppRoles.BOARD_USER) // inherit role capabilities. also takes an array
  .updateAny('board') // explicitly defined attributes
  .deleteAny('board');
