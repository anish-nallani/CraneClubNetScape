import { Component, NO_ERRORS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './index.html',
  styleUrl: './index.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [NO_ERRORS_SCHEMA]
})

export class Index {
  ngAfterViewInit(): void {
    const query = window.matchMedia("(max-width: 700px)")
    if (query.matches) {
      document.getElementById("sidebarThing")!.style.visibility = "hidden";
      document.getElementById("mainPageThing")!.style.width = "100vw";
    }
    else {
      document.getElementById("mainContainer")!.style.paddingLeft = "275px";
    }
    function JavaBlink(): void {
      var blinks = document.getElementsByTagName('JavaBlink');
      for (var i = blinks.length - 1; i >= 0; i--) {
        var s = blinks[i] as HTMLElement;
        s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
      }
      window.setTimeout(JavaBlink, 1000);
    }
    JavaBlink();
  }

}
