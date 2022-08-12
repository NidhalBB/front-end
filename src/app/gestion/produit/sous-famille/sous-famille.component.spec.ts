import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousFamilleComponent } from './sous-famille.component';

describe('SousFamilleComponent', () => {
  let component: SousFamilleComponent;
  let fixture: ComponentFixture<SousFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
