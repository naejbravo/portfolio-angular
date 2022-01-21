import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/Home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public main: Main[];

  constructor() {
    this.main = [
      {
        text: 'Estudios cursados en el periodo 2019/2021 - Administracio de Sistemas Informaticos en Red',
        img: {
          src: 'https://static.wixstatic.com/media/8f5592_c296a7c32f6c4a118480fc06a3286c0e.gif',
          alt: 'IES fuengirola 1',
        },
      },
      {
        text: 'spiterman rayado porque es el peor superheroe de todos :C',
        img: {
          src: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/UpgradeHub_white/original.png?1620836348',
          alt: 'Upgrade hub',
        },
      },
    ];
  }

  ngOnInit(): void {}
}
