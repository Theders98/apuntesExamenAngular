import { Injectable } from '@angular/core';
import { personaje } from '../models/personaje';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  personajes: personaje[] = [
    { id: 11, name: 'Goku' },
    { id: 12, name: 'Bardock' },
    { id: 13, name: 'Broly' },
    { id: 14, name: 'Vegeta' },
    { id: 15, name: 'Freezer' },
    { id: 16, name: 'Truks' },
    { id: 17, name: 'Zenos' },
    { id: 18, name: 'Goku Black' },
    { id: 19, name: 'Zamasu' },
    { id: 20, name: 'Kale' }
  ];
  getPersonajes(){
    return this.personajes;
  }
}
