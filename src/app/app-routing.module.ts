import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarMusicaComponent } from './componentes/musicas/criar-musica/criar-musica.component';
import { ListarMusicasComponent } from './componentes/musicas/listar-musicas/listar-musicas.component';
import { EditarMusicaComponent } from './componentes/musicas/editar-musica/editar-musica.component';
import { ExcluirMusicaComponent } from './componentes/musicas/excluir-musica/excluir-musica.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "listarMusicas",
    pathMatch : "full" 
  },
  {
    path : "criarMusica",
    component : CriarMusicaComponent
  },
  {
    path : "listarMusicas",
    component : ListarMusicasComponent
  },
  {
    path : "musicas/editarMusica/:id",
    component : EditarMusicaComponent
  },
  {
    path : "musicas/excluirMusica/:id",
    component : ExcluirMusicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
