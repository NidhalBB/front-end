import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonComponent } from './echantillon.component';

describe('EchantillonComponent', () => {
  let component: EchantillonComponent;
  let fixture: ComponentFixture<EchantillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchantillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
