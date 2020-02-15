import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  pokemons: pokemon[] = [
    { id: 11, name: 'Liberto' },
    { id: 12, name: 'Chikorita' },
    { id: 13, name: 'Pikachu' },
    { id: 14, name: 'Pinsir' },
    { id: 15, name: 'Scyther' },
    { id: 16, name: 'Machamp' },
    { id: 17, name: 'Dragonite' },
    { id: 18, name: 'Arceus' },
    { id: 19, name: 'Moltres' },
    { id: 20, name: 'Zapdos' }
  ];
  getPokemons(){
    return this.pokemons;
  }
}
