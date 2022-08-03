import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceMComponent } from './indice-m.component';

describe('IndiceMComponent', () => {
  let component: IndiceMComponent;
  let fixture: ComponentFixture<IndiceMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
