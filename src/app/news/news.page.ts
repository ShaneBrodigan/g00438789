import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {

  Countrycca2: string = "";
  CountryName: string = "";

  constructor(private mds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getCountryCca2();
    this.getCountryName();
  }

  async getCountryCca2() {
    this.Countrycca2 = await this.mds.get("cca2");
  }

  async getCountryName() {
    this.CountryName = await this.mds.get("nameOfCountry");
  }
}
