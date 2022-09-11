import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CphysiquesComponent } from './cphysiques.component';

describe('CphysiquesComponent', () => {
  let component: CphysiquesComponent;
  let fixture: ComponentFixture<CphysiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CphysiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CphysiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
