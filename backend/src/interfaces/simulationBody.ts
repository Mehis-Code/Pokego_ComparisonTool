//Interface for the body of the request to the simulation endpoint
import { IsString, IsInt, Min, Max, ValidateNested, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

//Validation for the body of the request
//The body of the request should contain 2 names and 2 levels
export class Pokemon {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsInt()
  @Min(1)
  @Max(50)
  level: number;
}

export class SimulationBody {
  @IsDefined()
  @ValidateNested()
  @Type(() => Pokemon)
  pokemon1: Pokemon;

  @IsDefined()
  @ValidateNested()
  @Type(() => Pokemon)
  pokemon2: Pokemon;
}
