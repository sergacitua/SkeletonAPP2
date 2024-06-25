import { Component, OnInit } from '@angular/core';

interface Review {
  name: string;
  comment: string;
  avatar: string;
}

interface Forum {
  title: string;
  description: string;
}

interface Recommendation {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  reviews: Review[] = [];
  forums: Forum[] = [];
  recommendations: Recommendation[] = [];

  constructor() { }

  ngOnInit() {
    
    this.reviews = [
      {
        name: 'Ignacio Sepulveda',
        comment: '¡Fue una experiencia increíble!',
        avatar: 'assets/avatar-Ignacio.jpg'
      },
      {
        name: 'Edgar Thraves',
        comment: 'Recomiendo visitar el museo local.',
        avatar: 'assets/avatar-edgar.jpg'
      },
      {
        name: 'Carlos Pérez',
        comment: 'El tour guiado fue excelente.',
        avatar: 'assets/avatar-carlos.jpg'
      }
    ];

    
    this.forums = [
      {
        title: 'Mejores destinos para el verano',
        description: 'Comparte tus experiencias y recomendaciones sobre los mejores destinos para visitar en verano.'
      },
      {
        title: 'Consejos para viajar con niños',
        description: 'Discusión sobre cómo hacer que los viajes sean más cómodos y divertidos para los niños.'
      },
      {
        title: 'Viajes económicos',
        description: 'Comparte tips y estrategias para ahorrar dinero mientras viajas.'
      }
    ];

    
    this.recommendations = [
      {
        title: 'Restaurante La Buena Mesa',
        detail: 'Excelente comida local con un ambiente acogedor. No te pierdas el plato especial del día.'
      },
      {
        title: 'Hotel Vista al Mar',
        detail: 'Alojamiento con vistas impresionantes al mar y servicios de primera clase.'
      },
      {
        title: 'Excursión a la Montaña',
        detail: 'Una experiencia única de senderismo con guías experimentados y paisajes impresionantes.'
      }
    ];
  }

  openForum(forum: Forum) {
    
    console.log(`Abriendo foro: ${forum.title}`);
  }
}