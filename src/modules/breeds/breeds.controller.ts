import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { CreateBreedDto } from './dtos/create-breed.dto';

@Controller('breeds')
export class BreedsController {
    constructor(
        private readonly BreedsService
    ){}
    @Get()
    findAll(): Promise<DogBreed[]> {
        return this.BreedsService.findAll();
    }


    @Post()
    create(@Body()dto: CreateBreedDto){
        this.BreedsService.create(dto);
    }
}
