import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-demo',
    templateUrl: 'demo.html',
})
export class DemoPage {

    num: number = 10;
    arr = [];
    user = {
        user_id: "",
        user_name: "",
        user_lname: ""
    };
    arrObj: any = [
        {
            user_id: 1,
            user_name: "Jorn",
            user_lname: "Smith"
        },
        {
            user_id: 2,
            user_name: "Anan",
            user_lname: "Anwa"
        },
    ];
    constructor(public navCtrl: NavController) {

    }
    clickme() {
        this.num++;
    }
    clickme2() {
        let a = Math.floor(Math.random() * 100) + 1;
        this.arr.push(a);
    }
    clickme3() {
        this.arrObj.push(this.user);
    }

}
