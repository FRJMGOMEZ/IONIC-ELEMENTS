import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters:string[] =['Batman','Aquaman','Spiderman','Antman','Ironman','Superman']
  constructor() { }

  ngOnInit() {
  }
  reorder(event){
    event.detail.complete()
    let from = event.detail.from;
    let to = event.detail.to;
    let characterToMove = this.characters.splice(from,1)[0];
    this.characters.splice(to,0,characterToMove);
  }

  onClick(){
    console.log(this.characters);
  }

}
