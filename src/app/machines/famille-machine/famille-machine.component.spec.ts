import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleMachineComponent } from './famille-machine.component';

describe('FamilleMachineComponent', () => {
  let component: FamilleMachineComponent;
  let fixture: ComponentFixture<FamilleMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilleMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
