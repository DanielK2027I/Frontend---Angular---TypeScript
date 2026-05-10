import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { userRegister } from '../../models/userRegister';
import { userLogin } from '../../models/userLogin';
import { UserRegister } from '../../service/user-register';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // FORMGROUP, CREAMOS EL OBJETO QUE REPRESENTA EL FORMULARIO , FORMCONTROL SON LOS ATRIBUTOS DEL FORMULARIOS
  // FORMULARIO DE REGISTRO
  
 RegisterForm : FormGroup = new FormGroup({
    username: new FormControl<String>('', Validators.required,),
    password: new FormControl<String>('', Validators.required),
    rolename: new FormControl<String>('CLIENT')
  });
  constructor(private authService: UserRegister,
    private router : Router
  ) {}
  
  // FUNCION PARA SETEAR EL DATO DEL HTML AL ATRIBUTO DE ROLE EN FORM CONTROL , METODOS QUE SE HEREDAN AL IMPORTAR REACTIVE FORMS
  setRole(button_role: string){
    this.RegisterForm.get('rolename')?.setValue(button_role);
  }

  // FORMULARIO DE INICIO DE SESION
  LoginForm : FormGroup = new FormGroup({
    username: new FormControl<String>('', Validators.required),
    password: new FormControl<String>('', Validators.required)
  });
  
  // FUNCIONES PARA OBTENER LOS DATOS DE LOS FROMGRUOP Y MANDARLOS A LAS INTERFACES
  onLogin(){
    if(this.LoginForm.valid){
      const dataLogin: userLogin = this.LoginForm.value as userLogin;
      this.authService.userLogin(dataLogin).subscribe({
      next: (res) => {
            localStorage.setItem('user_login', JSON.stringify(res));
            if(res.rolename === 'ADMIN') {
              this.router.navigate(['market/admin-component']);
            }else{
              this.router.navigate(['market/client-component']);
            }
      },
      error: (err) => console.error('Error al iniciar sesión', err)
    });
    }

  }

  onRegister(){
    if(this.RegisterForm.valid){
      const dataRegister: userRegister = this.RegisterForm.value as userRegister;
       this.authService.userRegister(dataRegister).subscribe({
      next: (res) => console.log('Registro exitoso',res),
      error: (err) => console.error('Error al registrar', err)
    });
    }
    
  }

}
