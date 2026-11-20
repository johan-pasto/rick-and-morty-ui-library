import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelect } from './ui-select';

describe('UiSelect', () => {
  let component: UiSelect;
  let fixture: ComponentFixture<UiSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the provided options', () => {
  fixture.componentRef.setInput('options', [
    { label: 'Personajes', value: 'characters' },
    { label: 'Episodios', value: 'episodes' },
  ]);

  fixture.detectChanges();

  const select: HTMLSelectElement =
    fixture.nativeElement.querySelector('select');

  expect(select.options.length).toBe(3);
  expect(select.options[1].textContent?.trim()).toBe('Personajes');
  expect(select.options[2].textContent?.trim()).toBe('Episodios');
});

it('should update the value when an option is selected', () => {
  fixture.componentRef.setInput('options', [
    { label: 'Personajes', value: 'characters' },
    { label: 'Episodios', value: 'episodes' },
  ]);

  fixture.detectChanges();

  const select: HTMLSelectElement =
    fixture.nativeElement.querySelector('select');

  select.value = 'episodes';
  select.dispatchEvent(new Event('change'));

  expect(component.value()).toBe('episodes');
});

it('should emit selectionChange when an option is selected', () => {
  let selectedOption: { label: string; value: string } | undefined;

  component.selectionChange.subscribe((option) => {
    selectedOption = option;
  });

  fixture.componentRef.setInput('options', [
    { label: 'Personajes', value: 'characters' },
    { label: 'Episodios', value: 'episodes' },
  ]);

  fixture.detectChanges();

  const select: HTMLSelectElement =
    fixture.nativeElement.querySelector('select');

  select.value = 'characters';
  select.dispatchEvent(new Event('change'));

  expect(selectedOption).toEqual({
    label: 'Personajes',
    value: 'characters',
  });
});
});
