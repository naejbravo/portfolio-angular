import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Home';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public hero: Hero;
  constructor() {
    this.hero = {
      img: {
        title: '',
        src: '../../../../../../assets/images/image.jpeg',
        alt: 'spiters',
      },
      lista: ['<', 'j', 'e', 'a', 'n', '>'],
    };
  }

  ngOnInit(): void {}
}
