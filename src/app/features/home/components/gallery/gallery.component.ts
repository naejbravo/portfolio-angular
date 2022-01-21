import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/Home';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public galleryProjects!: Gallery;
  constructor() {
    this.galleryProjects = {
      
      imageGallery: [
        {
          title:"proyecto 1",
          src: 'https://m.media-amazon.com/images/I/61GADPf-E9S._AC_UL320_.jpg',
          alt: '',
        },
        {
          title:"proyecto 2",
          src: 'https://m.media-amazon.com/images/I/51z4oVdgAqL._AC_UL320_.jpg',
          alt: '',
        },
        {
          title:"proyecto 3",
          src: 'https://m.media-amazon.com/images/I/51IrNjFHvZS._AC_UL320_.jpg',
          alt: '',
        },
        {
          title:"proyecto 4",
          src: 'https://m.media-amazon.com/images/I/61ZP+ifsXzL._AC_UL320_.jpg',
          alt: '',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
