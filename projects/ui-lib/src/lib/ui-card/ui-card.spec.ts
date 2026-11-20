import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCard } from './ui-card';

describe('UiCard', () => {
  let component: UiCard;
  let fixture: ComponentFixture<UiCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the title', () => {
  fixture.componentRef.setInput('title', 'Portal de acceso');
  fixture.detectChanges();

  const title: HTMLElement =
    fixture.nativeElement.querySelector('header span');

  expect(title.textContent).toContain('Portal de acceso');
});

it('should display the subtitle when provided', () => {
  fixture.componentRef.setInput('title', 'Portal de acceso');
  fixture.componentRef.setInput('subtitle', 'Explora la dimensión');
  fixture.detectChanges();

  const subtitle: HTMLElement =
    fixture.nativeElement.querySelector('header span:last-child');

  expect(subtitle.textContent).toContain('Explora la dimensión');
});

it('should emit headerClicked when the header is clicked', () => {
  let emitted = false;

  component.headerClicked.subscribe(() => {
    emitted = true;
  });

  const headerButton: HTMLButtonElement =
    fixture.nativeElement.querySelector('header button');

  headerButton.click();

  expect(emitted).toBe(true);
});
});
