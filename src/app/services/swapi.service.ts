import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getStarships(num: number): Observable<any> {
    return this.http.get('https://swapi.dev/api/starships/?page=' + num);
  }
  getStarship(num: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/starships/${num}/`);
  }
  getPilot(num: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/${num}/`);
  }
  getPilots(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people/?page=1');
  }

  getFilms(): Observable<any> {
    return this.http.get('http://swapi.dev/api/films/');
  }

  getAllPilots(pag: number): Observable<any> {
    return this.http.get('http://swapi.dev/api/people/?page=' + pag);
  }
}
