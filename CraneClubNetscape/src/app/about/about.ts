import { Component, AfterViewInit } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-about',
  imports: [Sidebar],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  ngAfterViewInit(): void {
    const query = window.matchMedia("(max-width: 700px)")
    if (query.matches) {
      document.getElementById("sidebarThing")!.style.visibility = "hidden";
      document.getElementById("mainPageThing")!.style.width = "100vw";
    }
    else {
      document.getElementById("mainContainer")!.style.paddingLeft = "275px";
    }
  }
}
