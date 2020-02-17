import { Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { POKEMONS } from './mock-pokemons';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons : pokemon[] = POKEMONS;
  constructor() { }

  getPokemon(id){
    return this.pokemons.find(pok => pok.id == id);
  }

  getPokemons(){
    return this.pokemons;
  }

nuevopokemon(pokemon: pokemon) {

  console.log(pokemon)
  this.pokemons.push(pokemon);
}

deletePokemon(id) {
  console.log(id)
    this.pokemons.splice(this.pokemons.indexOf(this.getPokemon(id)), 1);
    console.log(this.pokemons.indexOf(id))

}


}
