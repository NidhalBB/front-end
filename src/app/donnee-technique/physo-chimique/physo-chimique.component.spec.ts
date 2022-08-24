import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysoChimiqueComponent } from './physo-chimique.component';

describe('PhysoChimiqueComponent', () => {
  let component: PhysoChimiqueComponent;
  let fixture: ComponentFixture<PhysoChimiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysoChimiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysoChimiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
