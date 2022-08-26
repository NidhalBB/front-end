import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcoordonneComponent } from './gcoordonne.component';

describe('GcoordonneComponent', () => {
  let component: GcoordonneComponent;
  let fixture: ComponentFixture<GcoordonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcoordonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcoordonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
