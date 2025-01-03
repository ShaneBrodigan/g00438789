import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyDataServiceTsService } from '../services/my-data.service.ts.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, FormsModule, CommonModule],
})
export class HomePage {
  mds: MyDataServiceTsService;
  newName: String = "";
  nameToDisplay: String = "";

  constructor(mds: MyDataServiceTsService) {
    this.mds = mds;
  }

  ngOnInit() {
 
  }

  ionViewWillEnter() {
    this.getNameFromStorage();
  }

  async setName() {
    await this.mds.set("name", this.newName);
    this.nameToDisplay = this.newName;
  }

  async getNameFromStorage() {
    this.nameToDisplay = await this.mds.get("name");
    console.log(this.nameToDisplay);
  }
}
