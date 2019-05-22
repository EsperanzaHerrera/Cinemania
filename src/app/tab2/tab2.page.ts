import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor  (private actionSheet: ActionSheetController){}

  async presentActionSheet(){
    const actionSheet = await this.actionSheet.create({
      header: 'Forma de Pago',
      mode: 'md',
      buttons:[
        {
          text: 'Efectivo',
          icon: 'cash',
          handler: () => {
            console.log('Tu Cliqueaste en mi');
          }
        },
        {
          text: 'Redcompra',
          icon: 'card',
          handler: () => {
            console.log('Tu Cliqueaste en mi 2');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Tu Cliqueaste en mi 3');
          }
        },
      ]
    });
    await actionSheet.present();
  }
}

