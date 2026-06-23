/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const RequestHeader = createParamDecorator(
  (targetDto: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });
  },
);
