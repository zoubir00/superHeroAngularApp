import { Component } from '@angular/core';
import { superHero } from './Models/super-hero';
import { SuperHeroService } from './Services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes:superHero[]=[];
  heroToEdit?:superHero;
  constructor(private superHeroService:SuperHeroService){}

  ngOnInit(){
    this.superHeroService.getSuperHero().subscribe((result:superHero[])=>(this.heroes=result));
  }
  updateHeroList(heroes:superHero[]){
    this.heroes=heroes;
  }
  updateHero(hero:superHero){
    this.heroToEdit=hero;
  }
  initHero(){
    this.heroToEdit=new superHero();
  }
}
