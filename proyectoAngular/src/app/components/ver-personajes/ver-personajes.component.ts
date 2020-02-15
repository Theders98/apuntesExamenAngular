import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { personaje } from 'src/app/models/personaje';


@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.scss']
})
export class VerPersonajesComponent implements OnInit {

  constructor() { }
@Input() personaje : personaje
@Input() type : string
@Output() personajeActions = new EventEmitter<personaje>();
  ngOnInit(): void {
  }

personajeAction(type : string, personaje : personaje = null){
  this.personajeActions.emit(personaje)
}

}
