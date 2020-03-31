import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums:any[] 

  query:string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getAlbums('')
  }

  setQuery(event){
    this.query = event.detail.value;
    console.log(this.query)
  }

  getAlbums(filter:string){
    this.dataService.getAlbums(filter).subscribe((albums: any[]) => {
      console.log(albums)
      this.albums = albums
    })  
  }

}
