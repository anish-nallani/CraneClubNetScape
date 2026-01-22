import { Component, ViewEncapsulation } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-press',
  imports: [Sidebar],
  standalone: true,
  templateUrl: './press.html',
  styleUrls: ['./press.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Press {
  ngAfterViewInit(): void {
    const query = window.matchMedia("(max-width: 700px)")
    if (query.matches) {
      document.getElementById("sidebarThing")!.style.visibility = "hidden";
      document.getElementById("mainPageThing")!.style.width = "100vw";
      document.getElementById("mainPageThing")!.style.height = "100vh";
    }
    else {
      document.getElementById("mainContainer")!.style.paddingLeft = "275px";
      document.getElementById("mainPageThing")!.style.width = "81.5vw";
    }
  }
}
