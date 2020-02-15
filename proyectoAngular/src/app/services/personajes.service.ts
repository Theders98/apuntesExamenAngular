import { Injectable } from '@angular/core';
import { personaje } from '../models/personaje';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  personajes: personaje[] = [
    { id: 11, name: 'Goku', hero: true },
    { id: 12, name: 'Bardock', hero: false},
    { id: 13, name: 'Broly', hero: false},
    { id: 14, name: 'Vegeta', hero: true},
    { id: 15, name: 'Freezer', hero: false},
    { id: 16, name: 'Truks', hero: true},
    { id: 17, name: 'Zenos', hero: false},
    { id: 18, name: 'Goku Black', hero: false},
    { id: 19, name: 'Zamasu', hero: false},
    { id: 20, name: 'Kale', hero: false},
  ];
  getPersonajes(){
    return this.personajes;
  }
}
