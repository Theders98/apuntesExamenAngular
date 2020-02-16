import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {
  public title: string = "My Pokemon"
  public routeId: number;
  public display: boolean = false;
  public pokemon: pokemon;


  pokemons : pokemon [];

  constructor(
    private pokemonsService : PokemonsService,
    private route: ActivatedRoute
    ) {
      setTimeout(() => {
        this.title = `Staraptsu's Pokemons`;
        }, 3000);
    }

  ngOnInit() { this.pokemons = this.pokemonsService.getPokemons(); }

  getIdRoute(){
    this.routeId = this.route.snapshot.params["id"];
  }


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
  this.pokemonsService.nuevopokemon(this.pokemon)
}

deletePokemon(id) {
  this.pokemonsService.deletePokemon(id);
  this.display = false;
}

cerrarpokemon() {
  this.display = false;

}
}
