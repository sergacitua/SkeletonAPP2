import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.page.html',
  styleUrls: ['./itineraries.page.scss'],
})
export class ItinerariesPage implements OnInit {
  itineraryForm: FormGroup;
  itineraries: any[] = [];
  countries: any[] = [
    { name: 'París, Francia', image: 'assets/paris.jpg' },
    { name: 'Tokio, Japón', image: 'assets/tokyo.jpg' },
    { name: 'Nueva York, EE.UU.', image: 'assets/newyork.jpg' },
    { name: 'Roma, Italia', image: 'assets/roma.jpg' },
    { name: 'Sídney, Australia', image: 'assets/sidney.jpg' }
  ];
  selectedDestination: any = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
  itinerarySelected: boolean = false;
  selectedItinerary: any = null;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.itineraryForm = this.formBuilder.group({
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    
  }

  async addItinerary() {
    if (this.itineraryForm.valid) {
      const newItinerary = {
        destination: this.itineraryForm.value.destination,
        startDate: this.itineraryForm.value.startDate,
        endDate: this.itineraryForm.value.endDate,
        description: this.itineraryForm.value.description,
        image: this.getCountryImage(this.itineraryForm.value.destination)
      };
      this.itineraries.push(newItinerary);
      this.selectItinerary(newItinerary);
      this.itineraryForm.reset();
      await this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Que tengas un lindo viaje',
      buttons: ['OK']
    });

    await alert.present();
  }

  updateSelectedDestination() {
    const selectedCountry = this.itineraryForm.value.destination;
    this.selectedDestination = this.countries.find(country => country.name === selectedCountry);
  }

  updateSelectedDates() {
    this.startDate = this.itineraryForm.value.startDate;
    this.endDate = this.itineraryForm.value.endDate;
  }

  getCountryImage(destination: string): string {
    const country = this.countries.find(country => country.name === destination);
    return country ? country.image : 'assets/default-destination.jpg';
  }

  clearSelection() {
    this.selectedDestination = null;
    this.startDate = null;
    this.endDate = null;
  }

  selectItinerary(itinerary: any) {
    this.itinerarySelected = true;
    this.selectedItinerary = itinerary;
  }

  deselectItinerary() {
    this.itinerarySelected = false;
    this.selectedItinerary = null;
  }
}