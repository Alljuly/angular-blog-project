import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {
  photoCover: string = '../../../assets/image-placeholder.jpg';
  cardTitle: string = 'Adeus ao Lorem Ipsum tradicional';
  cardDescription: string =
    'Cat Ipsum deveria ser mais utilizado por todos! Pose purrfectly to show my beauty freak human out make funny noise mow mow mow mow mow mow success now attack human eat a plant, kill a hand i bet my nine lives on';
  constructor() {}

  ngOnInit(): void {}
}
