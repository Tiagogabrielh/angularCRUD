import { Component, Input, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../../musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  @Input() musica: Musica = {
    
    musica: "",
    compositor:"",
    modelo:"",
    favorito:false
  }

  @Input() listaFavoritos: Musica[] = [];

  constructor(private service: MusicaService) { }

  ngOnInit(): void {
  }

  mudarIconeFavorito(): string {
    if(this.musica.favorito == false){
       return 'inativo'} 
       
    return 'ativo';
  }

  atualizarFavoritos(){
      this.service.mudarFavorito(this.musica).subscribe(() => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.musica), 1)
      })
      
  }
}
