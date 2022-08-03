import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsComponent } from './equipements.component';

describe('EquipementsComponent', () => {
  let component: EquipementsComponent;
  let fixture: ComponentFixture<EquipementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
