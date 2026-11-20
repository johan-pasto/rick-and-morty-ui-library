import { Injectable, signal } from '@angular/core';
import { Character } from '../models/character';
import { Episode } from '../models/episode';
import { Location } from '../models/location';
import { RickAndMortyApi } from './rick-and-morty-api';

export type ResourceType = 'characters' | 'episodes' | 'locations';

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type ResourceRow = Character | Episode | Location;

@Injectable({
  providedIn: 'root',
})
export class ResourceState {
constructor(private readonly api: RickAndMortyApi) {}

  readonly resource = signal<ResourceType>('characters');
  readonly status = signal<CharacterStatus | null>(null);
  readonly rows = signal<ResourceRow[]>([]);
  readonly totalCount = signal<number>(0);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  loadData(): void {
  this.loading.set(true);
  this.error.set(null);

  const resource = this.resource();
  const status = this.status();

  switch (resource) {
    case 'characters':
      this.api.getCharacters(status ?? undefined).subscribe({
        next: (response) => {
          this.rows.set(response.results);
          this.loading.set(false);
          this.totalCount.set(response.info.count);
        },
        error: () => {
          this.error.set('Error loading characters.');
          this.loading.set(false);
        },
      });
      break;

    case 'episodes':
      this.api.getEpisodes().subscribe({
        next: (response) => {
          this.rows.set(response.results);
          this.loading.set(false);
          this.totalCount.set(response.info.count);
        },
        error: () => {
          this.error.set('Error loading episodes.');
          this.loading.set(false);
        },
      });
      break;

    case 'locations':
      this.api.getLocations().subscribe({
        next: (response) => {
          this.rows.set(response.results);
          this.loading.set(false);
          this.totalCount.set(response.info.count);
        },
        error: () => {
          this.error.set('Error loading locations.');
          this.loading.set(false);
        },
      });
      break;
    }
  }

  changeResource(resource: ResourceType): void {
    this.resource.set(resource);
    this.status.set(null);
    this.rows.set([]);
    this.error.set(null);
    this.loading.set(false);
  }

  changeStatus(status: CharacterStatus | null): void {
  this.status.set(status);
  this.rows.set([]);
  this.error.set(null);
  this.loading.set(false);
  }

  removeRow(row: ResourceRow): void {
  this.rows.update((currentRows) =>
    currentRows.filter((currentRow) => currentRow.id !== row.id),
  );
  }

}
