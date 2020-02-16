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

  getPokemon(id){
    return this.pokemons.find(pokem => pokem.id == id);
  }
nuevopokemon(pokemon: pokemon) {
  this.pokemons.push(pokemon);
}

deletePokemon(id) {
    this.pokemons.splice(this.pokemons.indexOf(id), 1);
}


}
