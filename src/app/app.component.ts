import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import CustomInputTypes from './types/customInput.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Wellcome';

}
