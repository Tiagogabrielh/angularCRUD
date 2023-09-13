import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../../musica';
import { MusicaService } from '../../musica.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-musica',
  templateUrl: './criar-musica.component.html',
  styleUrls: ['./criar-musica.component.css']
})
export class CriarMusicaComponent implements OnInit {

  //musica: Musica = {
    //musica: "",
    //compositor: "",
   //modelo: ""
  //} 

  formulario!: FormGroup

  constructor(private service:MusicaService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
    this.formulario = this.formBuilder.group( {
      musica: ['',Validators.compose(
        [Validators.required,Validators.pattern(/(.|\s)*\S(.|\s)*/)]
    )],
      compositor: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['',Validators.required],
      favorito: [false]
    })
  }

 

  acaoSalva(){
    console.log(this.formulario.get('musica')?.errors)
    if(this.formulario.valid){
        this.service.criar(this.formulario.value).subscribe(() => {
           this.router.navigate(['/listarMusicas'])})
        }
  }

  cancelar() {
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
