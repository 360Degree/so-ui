import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { AttendancePage } from '../attendance/attendance';
import { ExpensePage } from '../expense/expense';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  attendance(){
    this.navCtrl.push(AttendancePage);
  }

  currentVisit(){
    this.navCtrl.push(ExpensePage);
  }
}
