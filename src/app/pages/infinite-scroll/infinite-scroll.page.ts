import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll,{static:false}) infiniteScroll : IonInfiniteScroll

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('cargando siguientes...')
    setTimeout(()=>{
      if(this.data.length <= 50){
        const newArray = Array(20);
        this.data.push(...newArray)
        event.target.complete()
      }else{
        event.target.complete();
        this.infiniteScroll.disabled=true;
      }
     
    },1000)
  }

}
