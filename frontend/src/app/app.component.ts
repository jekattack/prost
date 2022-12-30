import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soundmachine-web-app';

  constructor(){}

  allSounds: string[] = [
    "thumbs-up",
    "heart",
    "laughing",
    "surprised",
    "unhappy",
    "applause",
    "raised-hand"
  ];

}
