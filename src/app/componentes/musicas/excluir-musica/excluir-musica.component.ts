import { Component, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../../musica.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-musica',
  templateUrl: './excluir-musica.component.html',
  styleUrls: ['./excluir-musica.component.css']
})
export class ExcluirMusicaComponent implements OnInit {

  musica:Musica = {
    id: 0,
    musica:'',
    compositor:'',
    modelo:'',
    favorito: false

  }
  constructor(private service: MusicaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscaPorId(parseInt(id!)).subscribe((musica) => {
      this.musica = musica
  })}

  excluirMusica() {
    if(this.musica.id) {
        this.service.excluir(this.musica.id).subscribe(() => {
            this.router.navigate(['/listarMusicas'])
        })
    }
  }

  cancelar() {
  this.router.navigate(['/listarMusicas'])
  }

}
