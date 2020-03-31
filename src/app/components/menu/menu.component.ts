import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { ComponentI } from 'src/app/interfaces/component.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components:Observable<ComponentI[]> 

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

}
