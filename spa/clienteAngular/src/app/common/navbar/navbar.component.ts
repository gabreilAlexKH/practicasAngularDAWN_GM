import { Component } from '@angular/core';
import {NavbarService} from 'src/app/servicios/navbar.service';
import {Navbar , Nav} from 'src/app/interfaz/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  links:Nav[] = [];
  siteName:string = "";

  constructor(private navbarService: NavbarService){

    navbarService.obtenerDatos().subscribe(respuesta => {
            
      let nav = respuesta as Navbar;

      this.links = nav.links;
      this.siteName = nav.siteName;
    })

  }

}
