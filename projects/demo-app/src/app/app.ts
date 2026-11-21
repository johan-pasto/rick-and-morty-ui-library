import { Component, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { UiButton, UiCard, UiSelect, UiTable, TableColumn, TableAction } from 'ui-lib';

import { ResourceState, ResourceType, CharacterStatus, ResourceRow } from './services/resource-state';

@Component({
  selector: 'app-root',
  imports: [UiButton,UiCard,UiSelect,UiTable,JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly state = inject(ResourceState);
  protected readonly selectedRow = signal<ResourceRow | null>(null);
  protected readonly isModalOpen = signal<boolean>(false);
  protected readonly pendingDeleteRow = signal<ResourceRow | null>(null);
  protected readonly isDeleteConfirmationOpen = signal<boolean>(false);

  protected onView(row: ResourceRow): void {
    this.selectedRow.set(row);
    this.isModalOpen.set(true);
  }

  protected closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedRow.set(null);
  }

  protected readonly resourceOptions = [
    { label: 'Personajes', value: 'characters' },
    { label: 'Episodios', value: 'episodes' },
    { label: 'Ubicaciones', value: 'locations' },
  ];

  protected readonly statusOptions = [
    { label: 'Todos', value: '' },
    { label: 'Vivo', value: 'Alive' },
    { label: 'Muerto', value: 'Dead' },
    { label: 'Desconocido', value: 'unknown' },
  ];
  protected get columns(): TableColumn[] {
    switch (this.state.resource()) {
      case 'characters':
        return [
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Nombre' },
          { key: 'status', header: 'Estado' },
          { key: 'species', header: 'Especie' },
        ];

      case 'episodes':
        return [
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Nombre' },
          { key: 'episode', header: 'Código' },
          { key: 'air_date', header: 'Fecha de emisión' },
        ];

      case 'locations':
        return [
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Nombre' },
          { key: 'type', header: 'Tipo' },
          { key: 'dimension', header: 'Dimensión' },
        ];
    }
  }

    protected onResourceChange(option: { value: string }): void {
      this.state.changeResource(option.value as ResourceType);
    }
    protected onStatusChange(option: { value: string }): void {
      const status = option.value
        ? (option.value as CharacterStatus)
        : null;

      this.state.changeStatus(status);
    }
  
  protected onTableAction(event: TableAction<ResourceRow>): void {
    if (event.action === 'view') {
      this.onView(event.row);
    }

    if (event.action === 'delete') {
      this.pendingDeleteRow.set(event.row);
      this.isDeleteConfirmationOpen.set(true);
    }
  }

  protected cancelDelete(): void {
    this.pendingDeleteRow.set(null);
    this.isDeleteConfirmationOpen.set(false);
  }

  protected confirmDelete(): void {
    const row = this.pendingDeleteRow();

    if (!row) {
      return;
    }

    this.state.removeRow(row);
    this.cancelDelete();
  }
}
