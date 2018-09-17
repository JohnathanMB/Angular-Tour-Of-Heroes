import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../Mock-Heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Crea una instancia de **Hero** como un Json
  hero: Hero = {
    id : 1,
    name : 'Windstorm'
  };

  //importar varios heroes
  heroes = HEROES;

  //paso de seleccionar hero
  selectedHero: Hero;
  
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
