import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {

}
