/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Logger } from '@nestjs/common';
import { Pokemon } from './interfaces/simulationBody';
import { writeFile } from 'fs/promises';


//Ensuring typing and running the python file
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'API is running!';
  }
  async simulateTwoPokemon(pokemon1: Pokemon, pokemon2: Pokemon): Promise<any> {
    const poke1 = JSON.stringify(pokemon1);
    const poke2 = JSON.stringify(pokemon2);

    const spawn = require('child_process').spawn;
    const process = spawn('python', ['./simulateMons.py', poke1, poke2]);
    process.stdout.on('data', async (data: any) => {
      const result = data.toString();
      return result;
  });
}
}
