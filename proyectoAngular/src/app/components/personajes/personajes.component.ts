import { Component, OnInit } from '@angular/core';
import {  PersonajesService } from 'src/app/services/personajes.service';
import { personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

public selectedPersonaje : personaje
public type : string
public display : boolean = false;

  personajes : personaje [];

  constructor(private personajesService : PersonajesService) { }

  ngOnInit() {
    this.personajes = this.personajesService.getPersonajes();
  }
  personajeActions(type : string, id = null, personaje : personaje = null){
    this.selectedPersonaje = personaje;
    this.display = true;
    switch (type) {

      case "add":
        this.personajes.push(personaje)
        break;

      case "edit":
        this.personajes.splice(this.personajes.indexOf(id),1)
        break;

      case "delete":
        this.personajes.splice(this.personajes.indexOf(id),1)
        break;

      default:
        break;
   }
 }
}
