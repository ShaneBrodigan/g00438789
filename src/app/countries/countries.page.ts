import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  searchedCountry: string= "";

  constructor(private mds: MyDataService) { }

  ngOnInit() {
    this.getSearchedCountry();
  }

  async getSearchedCountry() {
    this.searchedCountry = await this.mds.get('countryName');
  }

}
