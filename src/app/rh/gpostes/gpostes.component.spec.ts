import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpostesComponent } from './gpostes.component';

describe('GpostesComponent', () => {
  let component: GpostesComponent;
  let fixture: ComponentFixture<GpostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
