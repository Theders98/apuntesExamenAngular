import { Component, OnInit } from '@angular/core';
import {  PersonajesService } from 'src/app/services/personajes.service';
import { personaje } from 'src/app/models/personaje';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes : personaje [];

  constructor(private personajesService : PersonajesService) { }

  ngOnInit() {
    this.personajes = this.personajesService.getPersonajes();
  }

}
