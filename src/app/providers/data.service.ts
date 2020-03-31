import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentI } from 'src/app/interfaces/component.interface';
import { AlbumI } from '../interfaces/album.interface';
import { SuperheroeI } from '../interfaces/superheroes.interface';
import {delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getMenuOpts() {
    return this.http.get<ComponentI[]>('/assets/data/data.json')
  }

  getAlbums(query){
    return this.http.get<AlbumI[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getSuperheroes(){
    return this.http.get<SuperheroeI[]>("../../assets/data/superheroes.json").pipe(delay(2500))
  }
}
