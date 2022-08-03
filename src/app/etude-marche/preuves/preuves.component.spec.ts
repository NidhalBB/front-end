import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreuvesComponent } from './preuves.component';

describe('PreuvesComponent', () => {
  let component: PreuvesComponent;
  let fixture: ComponentFixture<PreuvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreuvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreuvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
