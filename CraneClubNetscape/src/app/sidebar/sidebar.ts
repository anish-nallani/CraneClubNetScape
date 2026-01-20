import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import Webamp from 'webamp';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements AfterViewInit {
  isOpen: boolean = false;
  ngAfterViewInit(): void {
    this.initializeWebamp();
  }

  initializeWebamp(): void {
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "Aphex Twin",
            title: "Xtal"
          },
          // NOTE: Your audio file must be served from the same domain as your HTML
          // file, or served with permissive CORS HTTP headers:
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
          url: "https://raw.githubusercontent.com/AmooshN/cranecult.github.io/main/Music/Xtal.mp3",
          duration: 4.54
        },
        {
          metaData: {
            artist: "George Clanton",
            title: "Livin' Loose"
          },
          url: "https://raw.githubusercontent.com/AmooshN/cranecult.github.io/main/Music/Livin_Loose.mp3",
          duration: 5.50
        }
      ],
    });

    // Returns a promise indicating when it's done loading.
    const webampContainer = document.getElementById('webamp');
    webamp.renderWhenReady(webampContainer!);
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
