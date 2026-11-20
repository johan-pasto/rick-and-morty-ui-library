import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButton } from './ui-button';

describe('UiButton', () => {
  let component: UiButton;
  let fixture: ComponentFixture<UiButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButton],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the button label', () => {
    fixture.componentRef.setInput('label', 'Explorar');

    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.textContent).toContain('Explorar');
    
  });
  it('should emit clicked when the button is clicked', () => {
  let emitted = false;

  component.clicked.subscribe(() => {
    emitted = true;
  });

  const button: HTMLButtonElement =
    fixture.nativeElement.querySelector('button');

  button.click();

  expect(emitted).toBe(true);
});

it('should not emit clicked when the button is disabled', () => {
  let emitted = false;

  component.clicked.subscribe(() => {
    emitted = true;
  });

  fixture.componentRef.setInput('disabled', true);
  fixture.detectChanges();

  const button: HTMLButtonElement =
    fixture.nativeElement.querySelector('button');

  button.click();

  expect(emitted).toBe(false);
});

it('should not emit clicked when the button is loading', () => {
  let emitted = false;

  component.clicked.subscribe(() => {
    emitted = true;
  });

  fixture.componentRef.setInput('loading', true);
  fixture.detectChanges();

  const button: HTMLButtonElement =
    fixture.nativeElement.querySelector('button');

  button.click();

  expect(emitted).toBe(false);
});
});
