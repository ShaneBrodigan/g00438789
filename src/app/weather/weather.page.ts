import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonIcon } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {

  longitude!: string;
  latitude!: string;
  apiKey = "40ff8bce13e9724749a0da5a54e97e6b";
  weatherRecievedFromApi !: any;
  options: HttpOptions = {
    url: "https://api.openweathermap.org/data/2.5/weather?lat="
  }

  constructor(private mds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getLongitude();
  }

  async getLongitude() {
    this.longitude = await this.mds.get("longitude");
    this.getLatitude();
  }

  async getLatitude() {
    this.latitude = await this.mds.get("latitude");
    this.getWeather();
  }

  async getWeather() {
    this.options.url = this.options.url.concat(this.latitude + "&lon=" + this.longitude + "&appid=" + this.apiKey);
    let result = await this.mhs.get(this.options);
    result = result.data;
    console.log(result);
  }
}
