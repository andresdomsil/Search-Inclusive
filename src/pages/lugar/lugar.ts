import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { Geolocation } from '@ionic-native/geolocation';
import { MapaPage } from '../mapa/mapa';
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
  public id         : any;
  public id_cat     : any;
  public title      : any;
  public lat        : any;
  public lon        : any;
  public titleLugar : any;
  public lugar      : any[];
  public imagenes   : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.id=this.navParams.get("id_lugar");
    this.id_cat=this.navParams.get("id_cat");
    var link = 'http://localhost/searchinclusive/controllers/LugarController.php?op=2&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.lugar= data.json();            
            this.lat=this.lugar[0].lat;
            this.lon=this.lugar[0].lon;
            this.titleLugar=this.lugar[0].nombre;
          });
    var link = 'http://localhost/searchinclusive/controllers/LugarController.php?op=4&id='+this.id;
    this.http.get(link)
          .subscribe(data => {
            this.imagenes= data.json();
          });
    var link = 'http://localhost/searchinclusive/controllers/LugarController.php?op=3&id='+this.id_cat;
    this.http.get(link)
          .subscribe(data => {
            this.title= data.text();
          });
  }

  cerrar(){
    this.navCtrl.pop();
  }

  irMapa(){
    this.navCtrl.push(MapaPage,{
      lat   : this.lat,
      lon   : this.lon,
      title : this.titleLugar
    });
  }

}
