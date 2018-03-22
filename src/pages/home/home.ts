import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AttendancePage } from '../attendance/attendance';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Geolocation]
})
export class HomePage {

  constructor(public navCtrl: NavController ,public geolocation:Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
       
     });
  
  }

  attendance(){
    this.navCtrl.push(AttendancePage);
  }

 

}
