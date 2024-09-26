import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

// console.log(v4());

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }
  ];

  onNewCharacter(character:Character):void{
    // console.log('MainPage');
    // console.log({character});
    const newCharacter:Character= {id:uuid(),...character}
    this.characters.push(newCharacter);
  }

  onDeleteId(id:number):void{
    console.log('MainPage');
    // console.log({character});

    this.characters.splice(id,1);
  }
  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character=>character.id!==id);
  }

  constructor() { }

}
