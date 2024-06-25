import { Component, OnInit } from '@angular/core';

interface Suggestion {
  title: string;
  description: string;
  image: string;
}

interface Offer {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.page.html',
  styleUrls: ['./suggestions.page.scss'],
})
export class SuggestionsPage implements OnInit {
  suggestions: Suggestion[] = [];
  offers: Offer[] = [];

  constructor() { }

  ngOnInit() {
    
    this.suggestions = [
      {
        title: 'París, Francia',
        description: 'Disfruta de la ciudad del amor con sus magníficos monumentos y cultura.',
        image: 'assets/paris.jpg'
      },
      {
        title: 'Tokio, Japón',
        description: 'Explora la vibrante metrópolis y su increíble tecnología.',
        image: 'assets/tokyo.jpg'
      },
      {
        title: 'Roma, Italia',
        description: 'Sumérgete en la historia antigua con sus icónicos lugares y gastronomía.',
        image: 'assets/roma.jpg'
      }
    ];

    
    this.offers = [
      {
        title: 'Descuento del 20% en París',
        description: 'Aprovecha esta oferta especial para disfrutar de un viaje inolvidable a París.',
        image: 'assets/paris_offer.jpg'
      },
      {
        title: 'Paquete todo incluido a Tokio',
        description: 'Obtén un paquete completo a Tokio con vuelos y hospedaje incluidos.',
        image: 'assets/tokyo_offer.jpg'
      },
      {
        title: 'Oferta especial en Roma',
        description: 'Disfruta de descuentos exclusivos en tours y actividades en Roma.',
        image: 'assets/roma_offer.jpg'
      }
    ];
  }
}
