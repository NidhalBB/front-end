import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoCorporelComponent } from './imo-corporel.component';

describe('ImoCorporelComponent', () => {
  let component: ImoCorporelComponent;
  let fixture: ComponentFixture<ImoCorporelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoCorporelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoCorporelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
