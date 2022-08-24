import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisExplorationComponent } from './permis-exploration.component';

describe('PermisExplorationComponent', () => {
  let component: PermisExplorationComponent;
  let fixture: ComponentFixture<PermisExplorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisExplorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
