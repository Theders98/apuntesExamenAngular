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
  pokemons : pokemon [];

  constructor(private pokemonsService : PokemonsService) { }
  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
}

mostrarDatos(){

}
@Input() pokemon: pokemon;

@Input() type: string;

@Output() crearPokemon = new EventEmitter<pokemon>();

@Output() modificar = new EventEmitter<pokemon>();

@Output() borrarPokemon = new EventEmitter<Number>();

@Output() cerrar = new EventEmitter<pokemon>();

CrearAlumno() {
  this.crearPokemon.emit();
}

ModificarAlumno(pokemon: pokemon) {
  this.modificar.emit(pokemon);
}

BorrarAlumno(id: number) {
  this.borrarPokemon.emit(id);
}

cerrarAlumno() {
  this.cerrar.emit();
}
}
