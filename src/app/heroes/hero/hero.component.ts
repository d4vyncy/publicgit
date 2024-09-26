import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 40;

  get capitalizedname(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changenHero(): void {
    this.name = 'spiderman';
  }
  changenAge(): void {
    this.age = 20;
  }

  resetForm():void{
    this.name='ironman';
    this.age=40;

    // document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>';
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML='<h1>Desde Angular</h1>';
    });
  }
}
