import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './modules/characters/characters.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CharacterComponent } from './modules/character/character.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'character/:id', component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
