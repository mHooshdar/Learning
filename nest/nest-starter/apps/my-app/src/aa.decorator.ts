import { SetMetadata } from '@nestjs/common';

export const Aa = (...args: string[]) => SetMetadata('aa', args);
