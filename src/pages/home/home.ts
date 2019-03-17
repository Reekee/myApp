import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemoPage } from '../demo/demo';
import { UserPage } from '../user/user';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    menus = [
        {
            name: "Demo",
            icon: "assets/imgs/demo-icon.png",
            page: DemoPage
        },
        {
            name: "สมาชิกทั้งหมด",
            icon: "assets/imgs/user-icon.png",
            page: UserPage
        },
    ];
    constructor(public navCtrl: NavController) {

    }
    goToPage(page) {
        this.navCtrl.push(page)
    }
}
