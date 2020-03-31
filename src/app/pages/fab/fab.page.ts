import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  
  data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,17,18,19,20];
  constructor() { }

  ngOnInit() {
  }

}
