import { Component, OnInit } from '@angular/core';
import {AutenticacaoService} from "../../autenticacao/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usario ='';
  senha ='';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {}
  login(){
    this.authService.autentica(this.usario, this.senha).subscribe(()=>{
      console.log("autenticado sucess");
    },
      (error) => {
      alert("usuario ou senha invalido");
      console.log(error);
    })
 }
}
