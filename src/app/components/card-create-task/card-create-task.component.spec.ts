import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateTaskComponent } from './card-create-task.component';

describe('CardCreateTaskComponent', () => {
  let component: CardCreateTaskComponent;
  let fixture: ComponentFixture<CardCreateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCreateTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
