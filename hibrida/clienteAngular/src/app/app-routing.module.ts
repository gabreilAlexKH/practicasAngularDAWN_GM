import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoComponent } from './foto/foto.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  { path: "foto", component: FotoComponent },
  { path: "album", component: AlbumComponent },
  { path: "**", redirectTo: "album" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
