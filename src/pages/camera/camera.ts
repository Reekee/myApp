import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
    selector: 'page-camera',
    templateUrl: 'camera.html',
})
export class CameraPage {
    img = "";
    word = "";
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private camera: Camera
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CameraPage');
    }
    openCamera() {
        let sourceType = this.camera.PictureSourceType.CAMERA;
        this.selectImage(sourceType);
    }
    openAlbum() {
        let sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        this.selectImage(sourceType);
    }
    selectImage(sourceType) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        }
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.img = base64Image;
            this.word = this.OCR(this.img);
        }, (err) => {

        });
    }
    OCR(img) {
        let word = "OCR Processing...";
        //// Your Calculation of data image




        return word;
    }
}
