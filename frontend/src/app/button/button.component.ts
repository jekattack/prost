import { Component, Inject, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit{

  @Input() emoji!: string;
  @Input() allSounds: string[] = []
  selectedSound: string = '';
  sound = new Audio();
  soundPath = '';

  playSound(){
    this.soundPath = "../assets/sounds/" + this.selectedSound + ".mp3";
    this.sound.play();
  }

  ngOnInit(){
    this.selectedSound = this.emoji;
    this.loadSelectedSound(this.selectedSound);
  }

  loadSelectedSound(selectedSound: string){
    this.soundPath = "../assets/sounds/" + selectedSound + ".mp3";
    this.sound.src = this.soundPath;
    this.sound.load();
  }

}
