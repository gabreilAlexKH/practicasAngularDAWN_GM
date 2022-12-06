import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient){}

  obtenerDatos(){
    return this.http.get("https://dawm-fiec-espol-default-rtdb.firebaseio.com/navbar.json");
  }
}
