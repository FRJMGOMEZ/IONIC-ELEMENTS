import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoModalPage } from '../info-modal/info-modal.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalController.create(
      {
        component: InfoModalPage,
        componentProps: {
          info: { name: 'Javier Martínez', location:"Comunidad de Madrid (ciudad de Madrid)"}
        }
      }
    )
    await modal.present();
    const stream:any = await modal.onDidDismiss();
    const data = stream.data;
    if(data){
      console.log(`Retorno del modal: ${data.name} -- ${data.location} `)
    }
  }

}
