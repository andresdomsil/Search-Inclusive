import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the LugarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  public id       : any;
  public title    : any;
  public lugar    : any[];
  public imagenes : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get("id_lugar");
    var link = 'http://sedely.com.mx/SI/controllers/LugarController.php?op=2&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.lugar= data.json();
            
          });
    var link = 'http://sedely.com.mx/SI/controllers/LugarController.php?op=4&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.imagenes= data.json();
          });
    var link = 'http://sedely.com.mx/SI/controllers/LugarController.php?op=3&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.title= data.text();
          });
  }

  cerrar(){
    this.navCtrl.pop();
  }

}
