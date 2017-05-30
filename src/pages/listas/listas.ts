import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the ListasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {

  public id     : any;
  public items  : any = [];
  public title : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get("id_cat");
    var link = 'http://localhost/SearchInclusive/controllers/LugarController.php?op=1&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.items= data.json();
            console.log(this.items);
          });
    var link = 'http://localhost/SearchInclusive/controllers/LugarController.php?op=3&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.title= data.text();
            console.log(this.title);
          });
  }

  cerrar(){
    this.navCtrl.pop();
  }

  

}
