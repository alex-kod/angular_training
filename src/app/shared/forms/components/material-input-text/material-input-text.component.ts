import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material-input-text',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule],
  templateUrl: './material-input-text.component.html',
  styleUrl: './material-input-text.component.css'
})
export class MaterialInputTextComponent {

}
