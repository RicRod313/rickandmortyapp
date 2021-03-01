import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export var URL_API_START = `https://rickandmortyapi.com/api/character/?page=1`;

@Injectable({
  providedIn: 'root'
})

export class CharactersApiService {

  constructor(private http: HttpClient) {  }

  getCharacters (page: any) : Observable<any> {
    return this.http.get<any>(page)
    .pipe(map((data: any) => data))
  }

  getCharacter ( idCharacter: number) : Observable<any> {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/${idCharacter}`)
    .pipe(map((data: any) => data))
  }

}
