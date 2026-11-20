import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTable } from './ui-table';

describe('UiTable', () => {
  let component: UiTable<Record<string, unknown>>;
  let fixture: ComponentFixture<UiTable<Record<string, unknown>>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTable],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the provided columns and rows', () => {
  fixture.componentRef.setInput('columns', [
    { key: 'name', header: 'Nombre' },
    { key: 'status', header: 'Estado' },
  ]);

  fixture.componentRef.setInput('rows', [
    { name: 'Rick Sanchez', status: 'Alive' },
    { name: 'Morty Smith', status: 'Alive' },
  ]);

  fixture.detectChanges();

  const table: HTMLTableElement =
    fixture.nativeElement.querySelector('table');

  expect(table).toBeTruthy();
  expect(table.textContent).toContain('Rick Sanchez');
  expect(table.textContent).toContain('Morty Smith');
  expect(table.textContent).toContain('Nombre');
  expect(table.textContent).toContain('Estado');
});

it('should display the empty message when there are no rows', () => {
  fixture.componentRef.setInput('rows', []);
  fixture.componentRef.setInput('emptyMessage', 'No hay personajes');
  fixture.detectChanges();

  expect(fixture.nativeElement.textContent).toContain('No hay personajes');
});

it('should display the loading state', () => {
  fixture.componentRef.setInput('columns', [
    { key: 'name', header: 'Nombre' },
  ]);
  fixture.componentRef.setInput('loading', true);
  fixture.detectChanges();

  const skeletons: HTMLElement[] =
    fixture.nativeElement.querySelectorAll('.animate-pulse');

  expect(skeletons.length).toBeGreaterThan(0);
});

it('should display the error message', () => {
  fixture.componentRef.setInput('errorMessage', 'Error al cargar datos');
  fixture.detectChanges();

  const alert: HTMLElement =
    fixture.nativeElement.querySelector('[role="alert"]');

  expect(alert.textContent).toContain('Error al cargar datos');
});

it('should emit actionTriggered when an action is clicked', () => {
  let emittedAction:
    | { action: 'view' | 'delete'; row: Record<string, unknown> }
    | undefined;

  const row = { name: 'Rick Sanchez', status: 'Alive' };

  component.actionTriggered.subscribe((event) => {
    emittedAction = event;
  });

  fixture.componentRef.setInput('columns', [
    { key: 'name', header: 'Nombre' },
  ]);
  fixture.componentRef.setInput('rows', [row]);
  fixture.detectChanges();

  const buttons: HTMLButtonElement[] =
    fixture.nativeElement.querySelectorAll('tbody button');

  buttons[0].click();

  expect(emittedAction).toEqual({
    action: 'view',
    row,
  });
});
it('should emit delete action when the delete button is clicked', () => {
  let emittedAction:
    | { action: 'view' | 'delete'; row: Record<string, unknown> }
    | undefined;

  const row = { name: 'Morty Smith', status: 'Alive' };

  component.actionTriggered.subscribe((event) => {
    emittedAction = event;
  });

  fixture.componentRef.setInput('columns', [
    { key: 'name', header: 'Nombre' },
  ]);
  fixture.componentRef.setInput('rows', [row]);
  fixture.detectChanges();

  const buttons: HTMLButtonElement[] =
    fixture.nativeElement.querySelectorAll('tbody button');

  buttons[1].click();

  expect(emittedAction).toEqual({
    action: 'delete',
    row,
  });
});
});
