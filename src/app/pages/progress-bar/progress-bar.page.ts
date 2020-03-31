import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  percent:number = 0.05

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event:CustomEvent){
    this.percent = event.detail.value / 100;
  }

}
