import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskScreenComponent } from './add-task.screen.component';

describe('AddTaskScreenComponent', () => {
  let component: AddTaskScreenComponent;
  let fixture: ComponentFixture<AddTaskScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
