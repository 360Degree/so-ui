import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
    selector: 'page-attendance',
    templateUrl: 'attendance.html'
})

export class AttendancePage{

    @ViewChild('map') mapElement: ElementRef;
    map:any;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public geolocation: Geolocation){}

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

    ionViewDidLoad(){
        this.loadMap();
    }
     
    loadMap(){
        this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude,{maximumAge:60000, timeout:5000, enableHighAccuracy:true});
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            let marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: this.map.getCenter()
              });
             
            let content = "<h4>Information!</h4>";         
            
            this.addInfoWindow(marker, content);

        },(err) => {
            console.log(err);
        });
    }

    addInfoWindow(marker, content){
 
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
       
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
       
      }
}