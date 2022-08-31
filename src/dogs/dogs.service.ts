import { Injectable } from '@nestjs/common';

type Dog = {
  id: number;
  name: string;
  age: number;
};

@Injectable()
export class DogsService {
  private dogs: Dog[] = [
    {
      id: 0,
      name: 'El milaneso',
      age: 12,
    },
  ];

  getDogs(): Promise<Dog[]> {
    return new Promise((resolve) => {
      resolve(this.dogs);
    });
  }

  createDog(dog: Dog): Promise<Dog> {
    this.dogs.push(dog);

    return new Promise((resolve) => {
      resolve(dog);
    });
  }

  getDogById(id: number): Promise<Dog> {
    return new Promise((resolve) => {
      resolve(this.dogs.filter((dog) => dog.id === id)[0]);
    });
  }
}
