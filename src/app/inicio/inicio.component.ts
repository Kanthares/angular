import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  styles: ['h1 {color: #000; margin-top: 80px;}'],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transition: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300,style({
          transform: 'translateX(0)',
          opaity: 1
        }))
      ])
    ])
  ]
})

export class InicioComponent {
  myimage: string = "../assets/img/logo.jpg"
}

