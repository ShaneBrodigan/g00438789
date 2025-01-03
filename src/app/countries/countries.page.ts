import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  searchedCountry: string= "";
  countryInfo!: any;
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  }

  constructor(private mds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getSearchedCountry();
  }

  async getSearchedCountry() {
    this.searchedCountry = await this.mds.get('countryName');
    this.options.url = this.options.url.concat(this.searchedCountry);
    let result = await this.mhs.get(this.options);
    this.countryInfo = result.data;
    console.log(this.countryInfo);
  }

}
