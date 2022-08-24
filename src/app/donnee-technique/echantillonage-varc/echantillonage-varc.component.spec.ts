import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchantillonageVarcComponent } from './echantillonage-varc.component';

describe('EchantillonageVarcComponent', () => {
  let component: EchantillonageVarcComponent;
  let fixture: ComponentFixture<EchantillonageVarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchantillonageVarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchantillonageVarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
