import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('transitionMessages', [
      state('start', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('end', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('start <=> end', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class HomePage implements OnInit {
  username: string = '';
  infoForm: FormGroup;
  latitude: number | null = null;
  longitude: number | null = null;

  @ViewChild('firstNameInput', { static: false }) firstNameInput!: ElementRef;
  @ViewChild('lastNameInput', { static: false }) lastNameInput!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private navCtrl: NavController
  ) {
    this.infoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      educationLevel: [''],
      birthDate: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      console.log('Error getting location', error);
    }
  }

  clearForm() {
    this.playAnimation();
    setTimeout(() => {
      this.infoForm.reset();
    }, 1000);
  }

  playAnimation() {
    const firstNameAnimation = this.animationCtrl.create()
      .addElement(this.firstNameInput.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

    const lastNameAnimation = this.animationCtrl.create()
      .addElement(this.lastNameInput.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

    firstNameAnimation.play();
    lastNameAnimation.play();
  }

  async showInfo() {
    const { firstName, lastName } = this.infoForm.value;
    const alert = await this.alertController.create({
      header: 'Información Ingresada',
      message: `Nombre: ${firstName} ${lastName}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}