import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../providers/data.service';
import { SuperheroeI } from '../../interfaces/superheroes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit,AfterViewInit {

  @ViewChild(IonSegment,{static:false}) ionSegment : IonSegment;

  superheros: Observable<SuperheroeI[]>

  publisher:string='';

 /*  superheroes:SuperheroeI[] =[]; */
  constructor(public dataService:DataService) { }

  ngOnInit() {
     this.superheros=this.dataService.getSuperheroes() 
  }

  ngAfterViewInit(){
     this.ionSegment.value = this.publisher
  }

  segmentChanged(event){
      this.publisher = event.detail.value;
  }

}
