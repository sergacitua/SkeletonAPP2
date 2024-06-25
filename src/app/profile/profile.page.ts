import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;

  constructor() { }

  ngOnInit() {
    
    this.user = {
      name: 'Sergio Gacitua',
      email: 'sergio.gacitua@gmail.com',
      phone: '+123456789',
      travelHistory: [
        {
          destination: 'París, Francia',
          date: '2023-04-15',
          description: 'Vacaciones en la ciudad del amor.',
          image: 'assets/paris.jpg'
        },
        {
          destination: 'Tokio, Japón',
          date: '2022-12-05',
          description: 'Exploración de la cultura japonesa.',
          image: 'assets/tokyo.jpg'
        },
        {
          destination: 'Nueva York, EE.UU.',
          date: '2022-07-20',
          description: 'Visita a la Gran Manzana.',
          image: 'assets/newyork.jpg'
        }
      ],
      preferences: [
        {
          title: 'Destinos de playa',
          description: 'Prefiero destinos que tengan playas hermosas y actividades acuáticas.'
        },
        {
          title: 'Gastronomía',
          description: 'Me encanta probar comidas locales y explorar mercados de alimentos.'
        },
        {
          title: 'Cultura e Historia',
          description: 'Disfruto visitar museos, sitios históricos y eventos culturales.'
        }
      ]
    };
  }
}
