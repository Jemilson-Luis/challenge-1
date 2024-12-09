import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-input.component.html',
  styleUrl: './new-task-input.component.scss'
})
export class NewTaskInputComponent {
  @Output() title = new EventEmitter<string>()
  taskTitle: string = ''

  registerTask() {
    this.title.emit(this.taskTitle)
    this.taskTitle = ''
  }
} 
