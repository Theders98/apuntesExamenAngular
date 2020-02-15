import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HomeComponent } from './components/home/home.component';
import { VerPokemonComponent } from './components/ver-pokemon/ver-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PersonajesComponent,
    PokemonsComponent,
    HomeComponent,
    VerPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
