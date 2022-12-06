import { Component } from '@angular/core';

import { NavbarService } from '../../servicios/navbar.service';
import {Nav , Navbar} from "../../interfaz/navbar"


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbar!:Navbar ;
  sitename:string = "";
  links:Nav[] = [];

  constructor(private navService: NavbarService){

    this.navService.obtenerDatos().subscribe(respuesta => {

      this.navbar = respuesta as Navbar;
      this.links = this.navbar["links"];
      this.sitename = this.navbar["site-name"];

    });
  }

  

}
