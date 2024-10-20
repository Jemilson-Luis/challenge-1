import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [HeaderComponentComponent, TaskItemComponent],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent {




}
