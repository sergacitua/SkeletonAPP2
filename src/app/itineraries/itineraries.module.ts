import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ItinerariesPageRoutingModule } from './itineraries-routing.module';
import { ItinerariesPage } from './itineraries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ItinerariesPageRoutingModule
  ],
  declarations: [ItinerariesPage]
})
export class ItinerariesPageModule {}
