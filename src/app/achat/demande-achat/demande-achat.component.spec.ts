import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAchatComponent } from './demande-achat.component';

describe('DemandeAchatComponent', () => {
  let component: DemandeAchatComponent;
  let fixture: ComponentFixture<DemandeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
