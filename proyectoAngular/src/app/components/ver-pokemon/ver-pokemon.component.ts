import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.scss']
})
export class VerPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pokemon: pokemon;

  @Output() edit = new EventEmitter<pokemon>();

  @Output() deletePokemon = new EventEmitter<Number>();

  @Output() close = new EventEmitter<pokemon>();


  ModificarPokemon(pokemon: pokemon) {
    this.edit.emit(pokemon);
  }

  BorrarPokemon(id: number) {
    this.deletePokemon.emit(id);
  }

  cerrarPokemon() {
    this.close.emit();
  }
}
