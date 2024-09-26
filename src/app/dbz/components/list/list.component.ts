import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-Detalle',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html',
})
export class ListDetalleComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  // public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDeleteCharacter(index: number): void {
  //   // console.log(index);
  //   this.onDeleteId.emit(index);
  // }
  deleteCharacterById(index?: string): void {
    // console.log(index);
    this.onDeleteId.emit(index);
  }
}
