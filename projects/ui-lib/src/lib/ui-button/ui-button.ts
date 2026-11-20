import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  })
export class UiButton {
  /** es la variante del boton, puede ser primary, secondary o danger este le da estilo al boton */
  variant = input<ButtonVariant>('primary');

  /** es el texto que se mostrara en el boton */
  label = input<string>('Boton');

  /** es el tamaño del boton, puede ser sm, md o lg este le da estilo al boton */
  size = input<ButtonSize>('md');

  /** es un booleano que indica si el boton esta deshabilitado o no */
  disabled = input<boolean>(false);

  /** es un booleano que indica si el boton esta cargando o no */
  loading = input<boolean>(false);

  /** es un evento que se emite cuando el boton es clickeado */
  clicked = output<void>();


  /** colores de boton segun su variante */

  variantClasses = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-[#97CE4C] text-[#252A34] hover:bg-[#85b83e]';

      case 'secondary':
        return 'bg-[#6B46C1] text-white hover:bg-[#5938a5]';

      case 'danger':
        return 'bg-[#E85D75] text-white hover:bg-[#d44861]';
      }
  });

 /** diferentes tamaños */

  sizeClasses = computed(() => {
    switch (this.size()) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';

      case 'md':
        return 'px-4 py-2 text-base';

      case 'lg':
        return 'px-6 py-3 text-lg';
    }
  });

   /** evitar que el boton pueda hacer click si esta deshabilitado o cargando */ 
  handleClick(): void {
    if (this.disabled() || this.loading()) {
      return;
    }

    this.clicked.emit();
  }
}

