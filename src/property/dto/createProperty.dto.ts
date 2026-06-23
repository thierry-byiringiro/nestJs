import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsString()
  @Length(2, 60, { groups: ['create'] })
  @Length(1, 60, { groups: ['update'] })
  description: string;

  @IsInt()
  @IsPositive()
  area: number;

  constructor(name: string, description: string, area: number) {
    this.name = name;
    this.description = description;
    this.area = area;
  }
}
