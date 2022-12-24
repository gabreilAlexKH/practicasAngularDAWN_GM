import { Component } from '@angular/core';
import { RecursosService } from './servicios/recursos.service';
import { Foto } from './interfaz/foto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteAngular';
  fotos:Foto[] = [];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {

          let arregloFotos = respuesta as Array<any>

          arregloFotos.map( item => { item.url = 'http://localhost:4444/'+item.ruta.replace('public/','') } )

          this.fotos = arregloFotos as Array<Foto>
      })
  }


}
