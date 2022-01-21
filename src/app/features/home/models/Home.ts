import { Image } from 'src/app/shared/models/Shared';

export interface Header {
  lista: [
    { enlace: string; url: string },
    { enlace: string; url: string },
    { enlace: string; url: string }
  ];
}

export interface Hero {
  img: Image;
  lista: string[];
}

export interface Main {
  img: Image;
  text: string;
}

export interface Gallery {
  imageGallery: Image[];
}
