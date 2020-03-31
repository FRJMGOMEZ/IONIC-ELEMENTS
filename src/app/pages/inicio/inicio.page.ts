import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Observable } from 'rxjs';
import { ComponentI } from 'src/app/interfaces/component.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components:Observable<ComponentI[]>

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts(); 
  }

 /*  toggleMenu(){
    console.log('Should toggle the menu')
     this.menuController.toggle()
  } */

}


