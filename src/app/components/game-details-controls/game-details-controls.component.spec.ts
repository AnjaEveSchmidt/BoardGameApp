import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsControlsComponent } from './game-details-controls.component';

describe('GameDetailsControlsComponent', () => {
  let component: GameDetailsControlsComponent;
  let fixture: ComponentFixture<GameDetailsControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetailsControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetailsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
