import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


const routes: Routes = [

  { path :'', component : HomeComponent},
  { path :'personajes', component : PersonajesComponent},
  { path :'pokemons', component : PokemonsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
