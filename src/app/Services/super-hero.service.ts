import { Injectable } from '@angular/core';
import { superHero } from '../Models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
url="https://localhost:7043/api/SuperHero";
  constructor(private http:HttpClient) { }

  public getSuperHero(): Observable<superHero[]> {
    return this.http.get<superHero[]>('https://localhost:7043/api/SuperHero');
  }
  public editSuperHero(hero:superHero): Observable<superHero[]> {
    return this.http.put<superHero[]>('https://localhost:7043/api/SuperHero',hero);
  }
  public CreateSuperHero(hero:superHero): Observable<superHero[]> {
    return this.http.post<superHero[]>('https://localhost:7043/api/SuperHero',hero);
  }
  public DeleteSuperHero(hero:superHero): Observable<superHero[]> {
    return this.http.delete<superHero[]>('https://localhost:7043/api/SuperHero/'+hero.id);
  }
}
