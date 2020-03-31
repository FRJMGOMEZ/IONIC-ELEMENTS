import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name:string

  user:any = {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
     console.log(this.user)
  }

}
