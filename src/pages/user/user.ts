import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage {
    users = [];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpClient
    ) {
    }

    ionViewDidLoad() {
        this.http.post("http://localhost/myapi/user-get.php", JSON.stringify({})).subscribe((res: any) => {
            //console.log(res);
            this.users = res;
        });
    }

}
