import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
    selector: 'page-barcode',
    templateUrl: 'barcode.html',
})
export class BarcodePage {
    code = "";
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private barcodeScanner: BarcodeScanner
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BarcodePage');
    }
    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            alert(barcodeData.text);
            this.code = barcodeData.text;
        }).catch(err => {
            console.log('Error', err);
        });
    }
}
