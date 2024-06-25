import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private apiService: ApiService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.apiService.authenticate(username, password).subscribe(
        profiles => {
          if (profiles.length > 0) {
            this.navCtrl.navigateForward('/home', {
              queryParams: { username: username }
            });
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        },
        error => {
          console.error('Error en la autenticación', error);
        }
      );
    }
  }
}