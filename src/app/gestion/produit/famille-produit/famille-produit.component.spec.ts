import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleProduitComponent } from './famille-produit.component';

describe('FamilleProduitComponent', () => {
  let component: FamilleProduitComponent;
  let fixture: ComponentFixture<FamilleProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilleProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
