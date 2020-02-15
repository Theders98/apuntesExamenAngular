import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {

  public display: boolean = false;
  public pokemon: pokemon;


  pokemons : pokemon [];

  constructor(private pokemonsService : PokemonsService) { }
  ngOnInit() { this.pokemons = this.pokemonsService.getPokemons(); }

mostrarDatos(){  }

pokemonEditDisplay(pokemon) {
  this.pokemon = pokemon;
  this.display = true;
}

nuevopokemon() {
  this.pokemon = {
    id: this.pokemons[this.pokemons.length - 1].id + 1,
    name: ""
  };
  this.pokemonEditDisplay(this.pokemon);

  this.pokemons.push(this.pokemon);
}

deletePokemon(id) {
    this.pokemons.splice(this.pokemons.indexOf(id), 1);

  this.display = false;
}

cerrarpokemon() {
  this.display = false;

}
}
