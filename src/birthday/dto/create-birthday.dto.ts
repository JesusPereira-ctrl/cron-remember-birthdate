import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateBirthdayDto {
  @IsString()
  public readonly name!: string;

  @IsNumber()
  @IsPositive()
  public readonly day!: number;

  @IsNumber()
  @IsPositive()
  public readonly month!: number;
}
