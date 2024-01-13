import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // Use the 'weapon' query parameter in your logic
    return this.ninjaService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(+id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    // Handle logic for creating a ninja
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    // Handle logic for updating a ninja with the specified id
    return this.ninjaService.updateNinja(+id,updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    // Handle logic for deleting a ninja with the specified id
    return this.ninjaService.removeNinja(+id);
  }
}
