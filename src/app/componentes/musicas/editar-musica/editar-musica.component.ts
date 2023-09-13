import { Component, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../../musica.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-musica',
  templateUrl: './editar-musica.component.html',
  styleUrls: ['./editar-musica.component.css']
})
export class EditarMusicaComponent implements OnInit {

  //musica:Musica = {
   // id: 0,
   // musica: '',
   // compositor:'',
   // modelo:'',
   // favorito: false

  //}

  formulario!: FormGroup

  constructor(private service: MusicaService,
    private router: Router,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
      this.service.buscaPorId(parseInt(id!)).subscribe( (musica) =>{ this.formulario = this.formBuilder.group({
        id: [musica.id],
        musica: [musica.musica, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        compositor: [musica.compositor, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [musica.modelo]
      })
    }) }
  

  editarMusica(){
    this.service.editar(this.formulario.value).subscribe(() => { 
      this.router.navigate(['/listarMusicas'])} )
  }

  cancelar(){
    this.router.navigate(['/listarMusicas'])
  }

  habilitarBotao() {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
