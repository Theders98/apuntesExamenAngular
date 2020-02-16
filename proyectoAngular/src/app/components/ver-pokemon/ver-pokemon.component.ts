import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pokemon',
  templateUrl: './ver-pokemon.component.html',
  styleUrls: ['./ver-pokemon.component.scss']
})
export class VerPokemonComponent implements OnInit {

  public routeID: number;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeID = this.activatedRoute.snapshot.params["id"];
  }

  @Input() pokemon: pokemon;

  @Output() edit = new EventEmitter<pokemon>();

  @Output() close = new EventEmitter<pokemon>();


  ModificarPokemon(pokemon: pokemon) {
    this.edit.emit(pokemon);
  }

  cerrarPokemon() {
    this.close.emit();
  }
}
