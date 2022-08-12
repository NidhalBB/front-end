import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectionComponent } from './prospection.component';

describe('ProspectionComponent', () => {
  let component: ProspectionComponent;
  let fixture: ComponentFixture<ProspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
