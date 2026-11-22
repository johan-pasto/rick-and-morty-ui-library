
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/** Available visual elevation styles for the card. */
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

  /**
   * Title displayed in the card header.
   * @default ''
   */
  title = input<string>('');

  /**
   * Optional subtitle displayed below the title.
   * @default null
   */
  subtitle = input<string | null>(null);

  /**
   * Defines the visual elevation style of the card.
   * @default 'raised'
   */
  elevation = input<CardElevation>('raised');

  /**
   * Event emitted when the card header is clicked.
   */
  headerClicked = output<void>();

  /**
   * CSS classes associated with each card elevation style.
   */
  elevationClasses: Record<CardElevation, string> = {
    flat: 'shadow-none',
    raised: 'shadow-lg',
    outlined: 'border border-[#97CE4C] shadow-none',
  };

  /**
   * Emits the headerClicked event when the card header is clicked.
   */
  handleHeaderClick(): void {
    this.headerClicked.emit();
  }
}
