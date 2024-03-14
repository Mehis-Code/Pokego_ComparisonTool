import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SimulationBody } from './interfaces/simulationBody';

//Routes for simulation, post request to /sim 
//simulates the difference in power of 2 pokemons
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sim')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/sim')
  simulateTwoPokemon(@Body() body: SimulationBody): any{
    //console.log(body.pokemon1, body.pokemon2);
    return this.appService.simulateTwoPokemon(body.pokemon1, body.pokemon2);
  }
}
