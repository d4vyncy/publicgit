import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    // console.log({deletedHero});
  }

}
