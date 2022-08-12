import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitfiniComponent } from './produitfini.component';

describe('ProduitfiniComponent', () => {
  let component: ProduitfiniComponent;
  let fixture: ComponentFixture<ProduitfiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitfiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitfiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
