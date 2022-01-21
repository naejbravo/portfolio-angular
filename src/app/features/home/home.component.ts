import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Gallery } from './models/Home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public gallerySpiderman!: Gallery;
  constructor() {
    this.gallerySpiderman = {
     
      imageGallery: [
        {
          src: 'https://i.blogs.es/4172c9/ffxdh5lx0acd7ic/1366_2000.jpeg',
          alt: 'Foto de Spiderman',
        },

        {
          src: 'https://dam.smashmexico.com.mx/wp-content/uploads/2018/02/spider-man-peter-parker-lecciones-no-ligar-marvel.jpg',
          alt: 'Foto de Spiderman',
        },
        {
          src: 'https://img.asmedia.epimg.net/resizer/7e8fHmSmOdNH408qiMrGK_CqqCY=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/EAKBYXUYTNIRXC5QRZFU5CV4IQ.jpg',
          alt: 'Foto de Spiderman',
        },
        {
          src: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/11/tom-holland-spider-man-156225604-scaled.jpeg?fit=1200%2C800&ssl=1',
          alt: 'Foto de Spiderman',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
