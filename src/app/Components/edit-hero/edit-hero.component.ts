import { Component, EventEmitter, Input, Output } from '@angular/core';
import { superHero } from 'src/app/Models/super-hero';
import { SuperHeroService } from 'src/app/Services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
@Input() hero?:superHero;
@Output() heroesUpdated=new EventEmitter<superHero[]>();

constructor(private heroService:SuperHeroService){}

updateHero(hero:superHero){
  this.heroService.editSuperHero(hero)
  .subscribe((heroes:superHero[])=>this.heroesUpdated.emit(heroes));
}
CreateHero(hero:superHero){
  this.heroService.CreateSuperHero(hero)
  .subscribe((heroes:superHero[])=>this.heroesUpdated.emit(heroes));
}
DeleteHero(hero:superHero){
  this.heroService.DeleteSuperHero(hero)
  .subscribe((heroes:superHero[])=>this.heroesUpdated.emit(heroes));
}
}
