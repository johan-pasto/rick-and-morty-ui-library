
import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';

/**
 * Represents an available option in the select component.
 */
export interface SelectOption {
  /** Text displayed for the option. */
  label: string;

  /** Value associated with the option. */
  value: string;
}

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [],
  templateUrl: './ui-select.html',
  styleUrl: './ui-select.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSelect {

  /**
   * Available options displayed in the select.
   * @default []
   */
  options = input<SelectOption[]>([]);

  /**
   * Label displayed above the select.
   * @default ''
   */
  label = input<string>('');

  /**
   * Text displayed when no option is selected.
   * @default 'Selecciona una opción'
   */
  placeholder = input<string>('Selecciona una opción');

  /**
   * Indicates whether the select is in a loading state.
   * @default false
   */
  loading = input<boolean>(false);

  /**
   * Indicates whether the select is disabled.
   * When true, the user cannot interact with the select.
   * @default false
   */
  disabled = input<boolean>(false);

  /**
   * Selected value of the select component.
   * Supports two-way binding through model().
   * @default null
   */
  value = model<string | null>(null);

  /**
   * Event emitted when an option is selected.
   * Emits the complete selected option object.
   */
  selectionChange = output<SelectOption>();

  /**
   * Handles changes in the select element.
   * Updates the selected value and emits the matching option.
   * @param event - The DOM event triggered by the select element.
   */
  handleChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.value.set(selectedValue || null);

    const selectedOption = this.options().find(
      (option) => option.value === selectedValue,
    );

    if (selectedOption) {
      this.selectionChange.emit(selectedOption);
    }
  }
}
