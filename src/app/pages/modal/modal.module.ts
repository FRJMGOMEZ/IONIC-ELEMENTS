import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../../components/components.module';
import { InfoModalPage } from '../info-modal/info-modal.page';
import { InfoModalPageModule } from '../info-modal/info-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ComponentsModule,
    InfoModalPageModule
  ],
  declarations: [ModalPage],
  entryComponents:[InfoModalPage]
})
export class ModalPageModule {}
