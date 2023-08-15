import { Injectable } from '@angular/core';
import { superHero } from '../Models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHero(): superHero[] {
    let hero=new superHero();
    hero.id=1;
    hero.name="Spider man";
    hero.firstName="Peter";
    hero.lastName="Parck";
    hero.place="New york";

    return [hero];
  }
}
