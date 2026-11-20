import {ChangeDetectionStrategy, Component, input, output,} from '@angular/core';

export type CardElevation = 'flat' | 'raised' | 'outlined';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCard {
  /** Título que se mostrará en el encabezado de la tarjeta. */
  title = input<string>('');

  /** Subtítulo opcional que se mostrará debajo del título. */
  subtitle = input<string | null>(null);

  /** Estilo visual de elevación de la tarjeta. */
  elevation = input<CardElevation>('raised');

  /** Evento emitido cuando se hace clic en el encabezado. */
  headerClicked = output<void>();

  /** Clases visuales correspondientes al nivel de elevación. */
  elevationClasses: Record<CardElevation, string> = {
    flat: 'shadow-none',
    raised: 'shadow-lg',
    outlined: 'border border-[#97CE4C] shadow-none',
  };

  /** Emite el evento cuando se hace clic en el encabezado. */
  handleHeaderClick(): void {
    this.headerClicked.emit();
  }
}