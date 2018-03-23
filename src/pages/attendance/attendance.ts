import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { TimerService } from '../../services/timer.service';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'


@Component({
    selector: 'page-attendance',
    templateUrl: 'attendance.html'
})

export class AttendancePage implements OnInit{
    public latitude: number;
    public longitude: number;
    public currentTime: string;
    public checkinTime: string;
    public checkoutTime: string;
    public countDown: any;

    public counter : number=1;
    public counter1 : number=86400; 
   

    constructor(public navCtrl: NavController, 
                public toastCtrl: ToastController, 
                public geolocation: Geolocation,
                public timerService: TimerService){}

    getCurrentTime(){
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        return this.currentTime=hours+' : '+minutes+' : '+seconds;
    }
    
    checkin(){
        this.checkinTime=this.getCurrentTime();
        this.startCounter();
        let toast = this.toastCtrl.create({
            message: 'Your attendance has been checked In',
            duration: 2000,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
          
        });
        toast.present();

    }

    checkout(){
        this.checkoutTime =this.getCurrentTime();
        //this.stopCounter();
        let toast = this.toastCtrl.create({
            message: 'Attendance Checked out ',
            duration: 2000,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
          
        });
        toast.present();
    }

    ngOnInit(){
        this.loadMap();
    }
     
    loadMap(){
        this.geolocation.getCurrentPosition().then((position) => {
            this.latitude=position.coords.latitude;
            this.longitude=position.coords.longitude;
        },(err) => {
            console.log(err);
        });
    }

    startCounter(){
        this.countDown=Observable.timer(0,1000).take(this.counter1).map(() => ++this.counter);
    }

    stopCounter(){
     this.countDown.unsubscribe();
    }
       
    
    
    
}