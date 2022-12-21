import { Component } from '@angular/core';
import { FuenteService } from 'src/app/sercicios/fuente.service';
import { Noticias } from 'src/app/interfase/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

  noticias:Noticias[] = [];

  constructor(private fuentes:FuenteService){

    this.fuentes.obtenerDatos().subscribe(response =>{
      this.noticias = response as Array<Noticias>;
    })

  }

}
