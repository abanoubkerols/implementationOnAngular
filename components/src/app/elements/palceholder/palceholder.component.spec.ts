import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalceholderComponent } from './palceholder.component';

describe('PalceholderComponent', () => {
  let component: PalceholderComponent;
  let fixture: ComponentFixture<PalceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalceholderComponent]
    });
    fixture = TestBed.createComponent(PalceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
