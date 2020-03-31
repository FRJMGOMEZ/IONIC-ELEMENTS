import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers:[DataService]
})
export class ListPage implements OnInit {
  
  @ViewChild('MyList',{static:false}) myList: IonList

  users:Observable<any>;

  constructor( public dataService:DataService, private toastController:ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user){
    this.myList.closeSlidingItems();
    let message = `Contact ${user.username} marked as favorite`
    this.presentToast(message)
  }

  share(user){
    this.myList.closeSlidingItems();
    let message = `Contact ${user.username} shared`
    this.presentToast(message)
  }

  delete(user){
    this.myList.closeSlidingItems();
    let message = `Contact ${user.username} deleted`
    this.presentToast(message)
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
