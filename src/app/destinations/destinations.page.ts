import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.page.html',
  styleUrls: ['./destinations.page.scss'],
})
export class DestinationsPage implements OnInit {
  destinations: any[] = []; 

  constructor() { }

  ngOnInit() {
    
    this.destinations = [
      {
        name: 'París, Francia',
        description: 'La ciudad del amor, famosa por su cultura, arte y arquitectura icónica.',
        image: 'assets/paris.jpg'
      },
      {
        name: 'Tokio, Japón',
        description: 'Una metrópolis vibrante conocida por su tecnología avanzada, cultura pop y templos históricos.',
        image: 'assets/tokyo.jpg'
      },
      {
        name: 'Nueva York, EE.UU.',
        description: 'La Gran Manzana, hogar de la Estatua de la Libertad, Times Square y Central Park.',
        image: 'assets/newyork.jpg'
      },
      {
        name: 'Roma, Italia',
        description: 'Una ciudad con una historia rica, hogar del Coliseo y la Ciudad del Vaticano.',
        image: 'assets/roma.jpg'
      },
      {
        name: 'Sídney, Australia',
        description: 'Conocida por la Ópera de Sídney, Harbour Bridge y hermosas playas.',
        image: 'assets/sidney.jpg'
      }
    ];
  }
}
