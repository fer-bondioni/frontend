import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  loaded: boolean=false;
  cursos: Array<Object> = [];
  constructor(private _service: CursosService) { }

  //traer todos los cursos, en el onint se renderizan los components
  //llamo las funciones independientes dentro del init
  async ngOnInit() {
     this.loadCursos();
    //  setTimeout(() => {
    //   this.loaded = !this.loaded; 
    //  }, 200);
  }
  async loadCursos(){
    const cursos : any = await this._service.all();
    this.cursos = cursos;
  }
 
}
