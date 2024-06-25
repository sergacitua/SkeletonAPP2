import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent {
  createProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private apiService: ApiService) {
    this.createProfileForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.createProfileForm.valid) {
      const profileData = this.createProfileForm.value;
      this.apiService.createProfile(profileData).subscribe(
        response => {
          console.log('Perfil creado exitosamente', response);
          this.navCtrl.navigateRoot('/login');
        },
        error => {
          console.error('Error al crear el perfil', error);
        }
      );
    }
  }
}