import { Injectable } from '@angular/core';
import { Musica } from './musica';
import { HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private readonly API = 'http://localhost:3000/musicas'
  constructor(private http: HttpClient) { }

 

  criar(musica: Musica): Observable<Musica> {
    return this.http.post<Musica>(this.API, musica)
  }
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Musica[]> {


    const itensPorPagina = 6
    let params = new HttpParams().set("_page", pagina).set('_limit',itensPorPagina)

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    if(favoritos){
      params = params.set("favorito", true)
    }

    return this.http.get<Musica[]>(this.API, {params})
  }

  listarMusicasFavoritos(pagina: number,filtro: string): Observable<Musica[]> {
    const itensPorPagina = 6
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)
      .set("favorito", true)

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }
    return this.http.get<Musica[]>(this.API, { params: params})
  }

  editar(musica: Musica): Observable<Musica> {
    const url = `${this.API}/${musica.id}`
    return this.http.put<Musica>(url, musica)
  }
  mudarFavorito(musica: Musica): Observable<Musica>{
    musica.favorito = !musica.favorito
    return this.editar(musica)
  }
  excluir(id: number): Observable<Musica> {
    const url = `${this.API}/${id}`
    return this.http.delete<Musica>(url)
    }
  buscaPorId(id: number): Observable<Musica> {
    const url = `${this.API}/${id}`
    return this.http.get<Musica>(url)
  }
}
