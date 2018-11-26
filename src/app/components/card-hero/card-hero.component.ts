import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
