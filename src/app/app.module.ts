import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarMusicaComponent } from './componentes/musicas/criar-musica/criar-musica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarMusicasComponent } from './componentes/musicas/listar-musicas/listar-musicas.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicaComponent } from './componentes/musicas/musica/musica.component';
import { EditarMusicaComponent } from './componentes/musicas/editar-musica/editar-musica.component';
import { ExcluirMusicaComponent } from './componentes/musicas/excluir-musica/excluir-musica.component';
import { BotaoCarregarMaisComponent } from './componentes/musicas/listar-musicas/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarMusicaComponent,
    ListarMusicasComponent,
    MusicaComponent,
    EditarMusicaComponent,
    ExcluirMusicaComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
