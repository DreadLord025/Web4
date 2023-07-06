import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
  Query
} from '@nestjs/common';
import { ITShopService } from './itshop.service';
import * as fs from 'fs';
import { CreateITShopDto } from './dto/create-itshop.dto';
import { UpdateITShopDto } from './dto/update-itshop.dto';
import { itExceptionFilter } from './filter/note-exception/it-exception.filter';

@Controller('itshop')
@UseFilters(new itExceptionFilter())
export class ITShopController {
  constructor(private readonly ITShopService: ITShopService) {}

  @Post('create')
  create(@Body() shop: CreateITShopDto) {
    return this.ITShopService.create(shop);
  }

  @Get('model/:id')
  findOne(@Param('id') id: string) {
    return this.ITShopService.findOne(id);
  }
  
  @Get('model')
  listFilterModel(@Query() record:any):string {
    console.log(record)
    const data = {
      id: record.id,
      model: record.model,
      price: record.price,
      warranty: record.warranty
    };
    const jsonData = JSON.stringify(data, null, 2);
    //fs.writeFileSync('D:/output.json', jsonData);
    return jsonData
  }

  @Delete('model/:id')
  remove(@Param('id') id: string) {
    return this.ITShopService.remove(id);
  }
  
  @Patch('model/:id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateITShopDto) {
    return this.ITShopService.update(id, updateShopDto);
  }
  
  @Get('models')
  findAll() {
    return this.ITShopService.findAll();
  }

}
