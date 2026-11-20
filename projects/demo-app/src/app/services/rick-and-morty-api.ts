import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../models/api-response';
import { Character } from '../models/character';
import { Episode } from '../models/episode';
import { Location } from '../models/location';


@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApi {
  private readonly baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private readonly http: HttpClient) {}

  getCharacters(status?: string): Observable<ApiResponse<Character>> {
    let params = new HttpParams();

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<ApiResponse<Character>>(
      `${this.baseUrl}/character`,
      { params },
    );
  }

  getEpisodes(): Observable<ApiResponse<Episode>> {
    return this.http.get<ApiResponse<Episode>>(`${this.baseUrl}/episode`);
  }

  getLocations(): Observable<ApiResponse<Location>> {
    return this.http.get<ApiResponse<Location>>(`${this.baseUrl}/location`);
  }
}