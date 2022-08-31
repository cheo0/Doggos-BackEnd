import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogs() {
    return this.dogsService.getDogs();
  }

  @Get('/:id')
  getDog(@Param('id') id: string) {
    return this.dogsService.getDogById(parseInt(id));
  }

  @Post()
  async createDog(@Body() dog: { name: string; age: number }) {
    const numberOfDogs = (await this.dogsService.getDogs()).length;

    return this.dogsService.createDog({
      ...dog,
      id: numberOfDogs + 1,
    });
  }
}
