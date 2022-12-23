import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrirComponent } from './inscrir.component';

describe('InscrirComponent', () => {
  let component: InscrirComponent;
  let fixture: ComponentFixture<InscrirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
