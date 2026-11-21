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

  getCharacters(
    status?: string,
    page: number = 1,
  ): Observable<ApiResponse<Character>> {
    let params = new HttpParams().set('page', page);

    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<ApiResponse<Character>>(
      `${this.baseUrl}/character`,
      { params },
    );
  }

  getEpisodes(page: number = 1): Observable<ApiResponse<Episode>> {
    const params = new HttpParams().set('page', page);

    return this.http.get<ApiResponse<Episode>>(
      `${this.baseUrl}/episode`,
      { params },
    );
  }

  getLocations(page: number = 1): Observable<ApiResponse<Location>> {
    const params = new HttpParams().set('page', page);

    return this.http.get<ApiResponse<Location>>(
      `${this.baseUrl}/location`,
      { params },
    );
  }
}
