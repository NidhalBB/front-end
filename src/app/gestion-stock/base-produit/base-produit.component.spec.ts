import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProduitComponent } from './base-produit.component';

describe('BaseProduitComponent', () => {
  let component: BaseProduitComponent;
  let fixture: ComponentFixture<BaseProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
