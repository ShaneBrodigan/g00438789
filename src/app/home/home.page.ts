import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonicStorageModule],
})
export class HomePage {

  ads: AppDataService;
  searchedCountry: string = "";


  constructor(private ads: AppDataService) {
   this.ads = ads;
  }

  ngOnInit() {}

  async openCountriesPage() {
    await this.ads.set("kw", this.searchedCountry);
  }
}
