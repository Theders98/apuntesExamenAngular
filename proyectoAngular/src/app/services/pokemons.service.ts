import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { POKEMONS } from './mock-pokemons';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons : pokemon[] = POKEMONS;
  constructor() { }

  getPokemons(){
    return this.pokemons;
  }

nuevopokemon(pokemon: pokemon) {

  console.log(pokemon)
  this.pokemons.push(pokemon);
}

deletePokemon(id) {
    this.pokemons.splice(this.pokemons.indexOf(id), 1);
}


}
