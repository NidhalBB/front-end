import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereacquiseComponent } from './matiereacquise.component';

describe('MatiereacquiseComponent', () => {
  let component: MatiereacquiseComponent;
  let fixture: ComponentFixture<MatiereacquiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereacquiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereacquiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
