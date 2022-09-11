import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaireComponent } from './temporaire.component';

describe('TemporaireComponent', () => {
  let component: TemporaireComponent;
  let fixture: ComponentFixture<TemporaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
