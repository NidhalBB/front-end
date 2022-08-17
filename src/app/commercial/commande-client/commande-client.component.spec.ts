import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeClientComponent } from './commande-client.component';

describe('CommandeClientComponent', () => {
  let component: CommandeClientComponent;
  let fixture: ComponentFixture<CommandeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
