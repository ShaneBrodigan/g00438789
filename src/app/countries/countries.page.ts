import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  private router!: Router;
  searchedCountry: string= "";
  countryInfo!: any[];
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  }

  constructor(private mds: MyDataService, private mhs: MyHttpService, router: Router) {
    this.router = router;
   }

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

  routeToNews(country: any) {
    let cca2OfCounty = country.cca2;
    this.setcca2(cca2OfCounty);
    this.router.navigate(["/news"]);
  }

  async setcca2(cca2: any) {
    await this.mds.set("cca2", cca2);
  }

}
