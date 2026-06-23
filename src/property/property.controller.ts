import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
  // ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import * as createPropertyZodDto from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headerDto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findOne(@Param('id', ParseIdPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return `${id}`;
  }
  @UsePipes(new ZodValidationPipe(createPropertyZodDto.createpropertySchema))
  @Post()
  create(
    @Body()
    body: createPropertyZodDto.CreatePropertyZodDto,
  ) {
    return body;
  }

  @Patch(':id')
  update(
    @Param('id') id: ParseIdPipe,
    @Body()
    body: CreatePropertyDto,
    @RequestHeader(
      new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    )
    header: HeadersDto,
  ) {
    return header;
  }
}
