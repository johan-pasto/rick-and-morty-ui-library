import {ChangeDetectionStrategy, Component, input, output,} from '@angular/core';

export interface TableColumn {
  key: string;
  header: string;
}

export type TableAction<T> = {
  action: 'view' | 'delete';
  row: T;
};

@Component({
  selector: 'ui-table',
  standalone: true,
  imports: [],
  templateUrl: './ui-table.html',
  styleUrl: './ui-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTable<T extends Record<string, unknown>> {
  /** Columnas que se mostrarán en la tabla. */
  columns = input<TableColumn[]>([]);

  /** Registros que se renderizarán. */
  rows = input<T[]>([]);

  /** Indica si la tabla está cargando información. */
  loading = input<boolean>(false);

  /** Mensaje que se muestra cuando no hay registros. */
  emptyMessage = input<string>('No hay registros para mostrar.');

  /** Mensaje de error que se muestra cuando falla la petición. */
  errorMessage = input<string | null>(null);

  /** Emite la acción seleccionada junto con el registro correspondiente. */
  actionTriggered = output<TableAction<T>>();

  /** Obtiene el valor de una propiedad del registro según la columna. */
  getCellValue(row: T, key: string): unknown {
    return row[key];
  }

  /** Emite una acción sobre el registro seleccionado. */
  handleAction(action: 'view' | 'delete', row: T): void {
    this.actionTriggered.emit({ action, row });
  }
}