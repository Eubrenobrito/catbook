import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NovoUsuarioService} from "./novo-usuario.service";
import {NovoUsuario} from "./novo-usuario";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {
novoUsuarioForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private novoUsuarioService:NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioForm= this.formbuilder.group({
      email:['', [Validators.required, Validators.email]],
      fullName:['', [Validators.required, Validators.minLength(3)]],
      userName:[''],
      password:['']
    })
  }

cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario)
}

}
