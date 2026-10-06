import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  item_code: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsInt()
  @Min(0)
  min_stock: number;
}