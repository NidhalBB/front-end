import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtComponent } from './mvt.component';

describe('MvtComponent', () => {
  let component: MvtComponent;
  let fixture: ComponentFixture<MvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
