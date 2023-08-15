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

  constructor(private superHeroService:SuperHeroService){}

  ngOnInit(){
    this.heroes=this.superHeroService.getSuperHero();
    console.log(this.heroes);
  }
}
