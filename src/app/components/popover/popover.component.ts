import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {


  items:any[] = Array(40);

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  itemSelection(value:number){
    console.log(value)
       this.popoverController.dismiss({item:value})
  }

}
