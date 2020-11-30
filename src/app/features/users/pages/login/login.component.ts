import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loaded: boolean = false;

  FormObject = {
    usuario: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ])
  }

  constructor(private _service: UsersService, private router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
    // this.loaded = !this.loaded;
  }

  verifyField(field:string):string{
    const element = this.form.controls[field];
    let message = '';
    element.status === "INVALID" && element.touched ? message = `El campo ${field} es obligatorio`:'';
    return message;
  }

  async login(){
    try{
      const result:any= await this._service.auth(this.form.value);
      const {JWT, info} = result;
      localStorage.setItem('JWT', JWT);
      localStorage.setItem('user', JSON.stringify(info));
      this.router.navigate(['cursos/all']);
    }
    catch(e){

    }
  }

}
