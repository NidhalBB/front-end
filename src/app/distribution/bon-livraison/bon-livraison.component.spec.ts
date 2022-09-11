import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLivraisonComponent } from './bon-livraison.component';

describe('BonLivraisonComponent', () => {
  let component: BonLivraisonComponent;
  let fixture: ComponentFixture<BonLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
