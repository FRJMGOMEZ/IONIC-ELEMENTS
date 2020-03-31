import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showPop(event:Event){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event,
      translucent: true,
      mode:'ios',
      backdropDismiss:false
    });
    await popover.present();
    const {data}= await popover.onWillDismiss();
    if(data){
      console.log(`Item seleccionado : ${data.item}`)
    }
  }

}
