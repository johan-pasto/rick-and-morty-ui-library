
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/**
 * Defines the structure of a table column.
 */
export interface TableColumn {
  /** Property key used to retrieve the cell value. */
  key: string;

  /** Text displayed in the column header. */
  header: string;
}

/**
 * Represents an action performed on a table row.
 * @template T - Type of the row data.
 */
export type TableAction<T> = {
  /** Action performed on the row. */
  action: 'view' | 'delete';

  /** Row associated with the action. */
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
export class UiTable<T extends object> {

  /**
   * Columns displayed in the table.
   * @default []
   */
  columns = input<TableColumn[]>([]);

  /**
   * Records rendered in the table.
   * @default []
   */
  rows = input<T[]>([]);

  /**
   * Indicates whether the table is in a loading state.
   * @default false
   */
  loading = input<boolean>(false);

  /**
   * Message displayed when the table contains no records.
   * @default 'No hay registros para mostrar.'
   */
  emptyMessage = input<string>('No hay registros para mostrar.');

  /**
   * Error message displayed when a request fails.
   * @default null
   */
  errorMessage = input<string | null>(null);

  /**
   * Event emitted when a table action is triggered.
   * Emits the selected action and its associated row.
   */
  actionTriggered = output<TableAction<T>>();

  /**
   * Retrieves the value of a property from a row using the column key.
   * @param row - Record from which the property value is retrieved.
   * @param key - Property key used to access the value.
   * @returns The property value, or undefined if the property does not exist.
   */
  getCellValue(row: T, key: string): unknown {
    return (row as unknown as Record<string, unknown>)[key];
  }

  /**
   * Emits an action associated with the selected row.
   * @param action - Action to perform, either view or delete.
   * @param row - Record associated with the action.
   */
  handleAction(action: 'view' | 'delete', row: T): void {
    this.actionTriggered.emit({ action, row });
  }
}
