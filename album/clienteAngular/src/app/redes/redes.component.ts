import { Component } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
   redes:any[] = [
   {
     'href': 'https://twitter.com/home',
     'alt': 'Sígueme en Twitter',
     'src': 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
     'show': true
   },
   {
     'href': 'https://www.facebook.com/',
     'alt': 'Likes en Facebook',
     'src': 'https://cdn-icons-png.flaticon.com/512/174/174848.png',
     'show': true
   },
   {
     'href': 'mailto:correo@gmail.com',
     'alt': 'Envíame un correo',
     'src': 'https://cdn-icons-png.flaticon.com/512/542/542638.png',
     'show': false
   },
   {
     'href': 'https://www.instagram.com/',
     'alt': 'Likes en Instagram',
     'src': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
     'show': true
   }
 ]
}
