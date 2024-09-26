import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { HeroModule } from "../heroes/hero.module";
import { ListDetalleComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDetalleComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent

  ],
  imports: [
    CommonModule,
    HeroModule,
    FormsModule,

  ]
})
export class DbzModule { }
