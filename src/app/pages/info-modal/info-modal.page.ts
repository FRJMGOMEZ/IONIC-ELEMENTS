import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {
  @Input() info: any

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  outWithoutArg() {
    this.modalController.dismiss()
  }

  outWithArg() {
    let args = {
      name: 'Pancho',
      location: 'Spain'
    }
    this.modalController.dismiss(args)
  }





}
