import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }
//  criando um metodo de autenticação
  autentica(usuario:string, senha: string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password:senha,
    })
  }
}
