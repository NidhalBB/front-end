import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSemifiniComponent } from './produit-semifini.component';

describe('ProduitSemifiniComponent', () => {
  let component: ProduitSemifiniComponent;
  let fixture: ComponentFixture<ProduitSemifiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitSemifiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSemifiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
