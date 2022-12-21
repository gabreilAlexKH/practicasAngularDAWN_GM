import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FuenteService {

  constructor(private http: HttpClient) { 

  }

  url:string = "https://dawm-fiec-espol-default-rtdb.firebaseio.com/news.json";

  obtenerDatos() {
    return this.http.get(this.url)
  }
}
