import { Component, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../../musica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-musicas',
  templateUrl: './listar-musicas.component.html',
  styleUrls: ['./listar-musicas.component.css']
})
export class ListarMusicasComponent implements OnInit {

  haMaisMusicas: boolean = true;
  listaMusicas: Musica[] = [];
  pagina: number = 1;
  filtro: string ='';
  favoritos: boolean = false;
  listaFavoritos: Musica[] = [];
  titulo: string ='Meu Álbum';

  constructor(private service:MusicaService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.pagina, this.filtro, this.favoritos).subscribe((listaMusicas) => {
      this.listaMusicas = listaMusicas})
  };

  carregarMaisMusicas(){
    this.service.listar(++this.pagina, this.filtro, this.favoritos).subscribe(listaMusicas => {this.listaMusicas.push(...listaMusicas);
      if(!listaMusicas.length){
        this.haMaisMusicas = false
      }
      })
  }

  pesquisarMusicas(){
    this.haMaisMusicas = true
    this.pagina = 1
    this.service.listar(this.pagina, this.filtro, this.favoritos).subscribe(listaMusicas => {this.listaMusicas = listaMusicas})

  }

  recarregarComponente(){
    this.favoritos = false
    this.pagina = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos'
    this.favoritos = true;
    this.haMaisMusicas = true;
    this.pagina = 1;
    this.service.listar(this.pagina, this.filtro, this.favoritos).subscribe(listaMusicasFavoritos =>
      {this.listaMusicas = listaMusicasFavoritos
      this.listaFavoritos = listaMusicasFavoritos})

  }
}
