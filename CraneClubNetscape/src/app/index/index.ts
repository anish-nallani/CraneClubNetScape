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
  ngAfterViewInit(): void {
    const query = window.matchMedia("(max-width: 700px)")
    if (query.matches) {
      document.getElementById("sidebarThing")!.style.visibility = "hidden";
      document.getElementById("mainPageThing")!.style.width = "0vw";
    }
  }
  }
