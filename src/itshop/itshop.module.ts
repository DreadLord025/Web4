import { Module } from '@nestjs/common';
import { ITShopService } from './itshop.service';
import { ITShopController } from './itshop.controller';

@Module({
  controllers: [ITShopController],
  providers: [ITShopService],
})
export class ITShopModule {}
