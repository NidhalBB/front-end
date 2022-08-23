import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinierComponent } from './minier.component';

describe('MinierComponent', () => {
  let component: MinierComponent;
  let fixture: ComponentFixture<MinierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
