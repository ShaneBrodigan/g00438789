import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {

  countrycca2: string = "";
  countryName: string = "";
  apiKey = "pub_64298dc8e5a64e22345a37529de6097a947d0";
  newsRecievedFromApi: any;
  options: HttpOptions = {
    url: "https://newsdata.io/api/1/latest?apikey=" + this.apiKey + "&country="
  }

  constructor(private mds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getCountryCca2();
  }

  async getCountryCca2() {
    this.countrycca2 = await this.mds.get("cca2OfCountry");
    this.getCountryName();
  }

  async getCountryName() {
    this.countryName = await this.mds.get("nameOfCountry");
    this.getCountryNews();
  }

  async getCountryNews() {
    this.options.url = this.options.url.concat(this.countrycca2);
    let result = await this.mhs.get(this.options); 
    this.newsRecievedFromApi = result.data.results;
    console.log(this.newsRecievedFromApi);
  }
}
