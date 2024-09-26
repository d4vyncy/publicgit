import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { ListDetalleComponent } from '../list/list.component';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Vulma',
    power: 1
  };

  emitCharacter():void{
    // console.log(this.character);

    if(this.character.name.length==0) return;
    //const nuevoCharacter=this.character;
    // const nuevoCharacter={...this.character};
    const nuevoCharacter = Object.assign({}, this.character);

    this.onNewCharacter.emit(nuevoCharacter);

    this.character.name='';
    this.character.power=0;
  }
}
