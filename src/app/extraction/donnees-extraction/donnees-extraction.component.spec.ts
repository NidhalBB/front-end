import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesExtractionComponent } from './donnees-extraction.component';

describe('DonneesExtractionComponent', () => {
  let component: DonneesExtractionComponent;
  let fixture: ComponentFixture<DonneesExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesExtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
