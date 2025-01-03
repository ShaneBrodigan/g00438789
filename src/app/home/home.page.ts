import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyDataService } from '../services/my-data.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule, CommonModule],
})
export class HomePage {
  mds: MyDataService;
  searchedCountry: String = "";

  constructor(mds: MyDataService) {
    this.mds = mds;
  }

  ngOnInit() {
 
  }

  ionViewWillEnter() {
  //  this.getCountryFromStorage();
  }

  async setCountry() {
    await this.mds.set("countryName", this.searchedCountry);
  }

  /*
  async getCountryFromStorage() {
    await this.mds.get("name");
  }
  */
}
