import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninjaA', weapon: 'stars' },
    { id: 1, name: 'ninjaB', weapon: 'nunchucks'},
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
       return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    } else {
       return this.ninjas;
    }
}

  getNinja(id: number) {
    const ninja = this.ninjas.find((n) => n.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
  }

  removeNinja(id: number) {
    try {
      const toBeRemoved = this.getNinja(id);
      this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
      return toBeRemoved;
    } catch (error) {
      // Handle the error, e.g., log it or return a specific response
      console.error(error.message);
      return null;
    }
  }
  
  
  
  





}
