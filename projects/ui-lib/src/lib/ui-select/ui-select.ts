import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';

export interface SelectOption {
  label: string;
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
  /** Opciones disponibles para seleccionar. */
  options = input<SelectOption[]>([]);

  /** Etiqueta visible sobre el selector. */
  label = input<string>('');

  /** Texto mostrado cuando no hay una opción seleccionada. */
  placeholder = input<string>('Selecciona una opción');

  /** Indica si el selector está cargando. */
  loading = input<boolean>(false);

  /** Bloquea la interacción con el selector. */
  disabled = input<boolean>(false);

  /** Valor seleccionado, sincronizable mediante model(). */
  value = model<string | null>(null);

  /** Emite el objeto completo de la opción seleccionada. */
  selectionChange = output<SelectOption>();

  /** Actualiza el valor y emite la opción seleccionada. */
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