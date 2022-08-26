import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcollaborateurComponent } from './gcollaborateur.component';

describe('GcollaborateurComponent', () => {
  let component: GcollaborateurComponent;
  let fixture: ComponentFixture<GcollaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcollaborateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
