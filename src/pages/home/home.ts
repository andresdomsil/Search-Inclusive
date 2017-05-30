import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasPage } from '../listas/listas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  listas(id){
    this.navCtrl.push(ListasPage, {
      id_cat : id
    })
  }

  

}
