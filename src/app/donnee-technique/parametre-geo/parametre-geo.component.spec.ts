import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreGeoComponent } from './parametre-geo.component';

describe('ParametreGeoComponent', () => {
  let component: ParametreGeoComponent;
  let fixture: ComponentFixture<ParametreGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreGeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
