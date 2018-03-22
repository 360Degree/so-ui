import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-attendance',
    templateUrl: 'attendance.html'
})

export class AttendancePage{

    constructor(public navCtrl:NavController,public toastCtrl:ToastController){}

    checkin(){
        let toast = this.toastCtrl.create({
            message: 'Your attendance has been checked In',
            duration: 3000,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
          
        });
        toast.present();
    }

    checkout(){
        let toast = this.toastCtrl.create({
            message: 'Attendance Checked out ',
            duration: 3000,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
          
        });
        toast.present();
    }

}