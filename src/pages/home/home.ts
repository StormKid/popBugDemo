import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { ContainerComponent } from '../../components/container/container';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public pop:PopoverController) {

  }


  showPop($event){
    console.log("xxxxx");
    
    this.pop.create(ContainerComponent).present({ev:event})
  }

}
