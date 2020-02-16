import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


const routes: Routes = [

  { path :'', component : HomeComponent},
  { path :'pokemons', component : PokemonsComponent},
  { path :'pokemons/:id', component : PokemonsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
