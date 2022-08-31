import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [DogsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
