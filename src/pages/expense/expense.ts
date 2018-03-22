import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';


@Component({
    selector: 'page-expense',
    templateUrl: 'expense.html'
})

export class ExpensePage implements OnInit{

    public photos: any;
    public base64Image: string;
    pdfObj=null;

    constructor(public camera: Camera, public file: File, public fileOpener: FileOpener){}

    ngOnInit(){
        this.photos=[];
    }

    takePicture(){
        const options : CameraOptions = {
            quality: 50, // picture quality
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options) .then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        }, (err) => {
            console.log(err);
        });
    }

    deletePhoto(index){
        this.photos.splice(index, 1);
    }

    attachMedia(){

    }

    createPDF(){
       var docDefinition={
        content:[
            this.base64Image
        ]
       };
          
       this.pdfObj=pdfMake.createPdf(docDefinition).open();
    }

    uploadPDF(){
        alert('uploading PDF');
    }

}