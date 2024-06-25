import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { LocalDatabaseService } from './local-database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService, private localDB: LocalDatabaseService) {}

  ngOnInit() {
    window.addEventListener('online', () => {
      this.syncData();
    });
  }

  syncData() {
    this.localDB.getData('profiles').then((data) => {
      if (data) {
        this.apiService.syncData(data).subscribe(
          response => {
            console.log('Data synchronized successfully', response);
          },
          error => {
            console.error('Error synchronizing data', error);
          }
        );
      }
    });
  }
}
