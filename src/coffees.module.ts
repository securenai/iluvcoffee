import { CoffeesService } from './coffees/coffees.service';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  imports: [],
})
export class CoffeesModule {}
