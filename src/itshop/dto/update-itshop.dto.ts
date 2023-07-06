import { PartialType } from '@nestjs/mapped-types';
import { CreateITShopDto } from './create-itshop.dto';

export class UpdateITShopDto extends PartialType(CreateITShopDto) {
  public id: string;
  public model: string;
  public price: string;
  public warranty: string;
}
