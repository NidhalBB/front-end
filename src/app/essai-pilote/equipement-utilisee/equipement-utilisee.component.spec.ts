import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementUtiliseeComponent } from './equipement-utilisee.component';

describe('EquipementUtiliseeComponent', () => {
  let component: EquipementUtiliseeComponent;
  let fixture: ComponentFixture<EquipementUtiliseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementUtiliseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementUtiliseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
