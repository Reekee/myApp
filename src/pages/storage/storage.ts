import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-storage',
    templateUrl: 'storage.html',
})
export class StoragePage {
    data = "";
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: Storage
    ) {
    }

    ionViewDidLoad() {
        this.getData();
    }
    setData() {
        this.storage.set('data', this.data).then(() => {
            this.getData();
        });
    }
    getData() {
        this.storage.get('data').then(res => {
            this.data = res;
        });
    }
    removeData() {
        this.storage.remove('data').then(() => {
            this.getData();
        });
    }
}
