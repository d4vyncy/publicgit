import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) {

  }

  ngOnInit() { }

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  deleteCharacterById(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);

  }
  // console.log('MainPage');
  // console.log({character});


  // public characters: Character[] = [{
  //   name: 'Krillin',
  //   power: 1000
  // }, {
  //   name: 'Goku',
  //   power: 9500
  // }, {
  //   name: 'Vegeta',
  //   power: 9000
  // }
  // ];

  // onNewCharacter(character:Character):void{
  //   // console.log('MainPage');
  //   // console.log({character});

  //   this.characters.push(character);
  // }

  // onDeleteId(id:number):void{
  //   console.log('MainPage');
  //   // console.log({character});

  //   this.characters.splice(id,1);
  // }
}
