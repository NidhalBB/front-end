import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcompetanceComponent } from './gcompetance.component';

describe('GcompetanceComponent', () => {
  let component: GcompetanceComponent;
  let fixture: ComponentFixture<GcompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcompetanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
