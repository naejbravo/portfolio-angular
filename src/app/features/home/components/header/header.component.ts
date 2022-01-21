import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/Home';

@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public header: Header;
  constructor() {
    this.header = {
      lista: [
        {
          enlace: 'Inicio',
          url: '#hero',
        },
        {
          enlace: 'Formacion',
          url: '#main',
        },
        {
          enlace: 'Proyectos',
          url: '#gallery',
        },
      ],
    };
  }

  

  ngOnInit(): void {}
}
