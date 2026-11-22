
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

/** Available visual styles for the button. */
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

/** Available sizes for the button. */
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

  /**
   * Defines the visual style of the button.
   * Available variants are primary, secondary and danger.
   * @default 'primary'
   */
  variant = input<ButtonVariant>('primary');

  /**
   * Text displayed inside the button.
   * @default 'Boton'
   */
  label = input<string>('Boton');

  /**
   * Defines the size of the button.
   * Available sizes are sm, md and lg.
   * @default 'md'
   */
  size = input<ButtonSize>('md');

  /**
   * Indicates whether the button is disabled.
   * When true, the button cannot be interacted with.
   * @default false
   */
  disabled = input<boolean>(false);

  /**
   * Indicates whether the button is in a loading state.
   * When true, the button displays a loading indicator and blocks clicks.
   * @default false
   */
  loading = input<boolean>(false);

  /**
   * Event emitted when the button is clicked.
   * The event is emitted only if the button is neither disabled nor loading.
   */
  clicked = output<void>();

  /**
   * Computes the CSS classes associated with the selected button variant.
   * @returns A string containing the Tailwind CSS classes for the variant.
   */
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

  /**
   * Computes the CSS classes associated with the selected button size.
   * @returns A string containing the Tailwind CSS classes for the size.
   */
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

  /**
   * Handles the button click event.
   * Prevents the event from being emitted when the button is disabled or loading.
   * Otherwise, emits the clicked event.
   */
  handleClick(): void {
    if (this.disabled() || this.loading()) {
      return;
    }

    this.clicked.emit();
  }
}
