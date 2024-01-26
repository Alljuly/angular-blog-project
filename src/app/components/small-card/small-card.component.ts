import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: String = '';
  @Input()
  cardTitle: String = '';
  @Input()
  Id: String = '';
  constructor() {}

  ngOnInit(): void {}
}
