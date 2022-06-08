import { CoffeesService } from './coffees/coffees.service';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees/coffees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './coffees/entities/coffee.entity';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
    ]),
  ],
})
export class CoffeesModule {}
