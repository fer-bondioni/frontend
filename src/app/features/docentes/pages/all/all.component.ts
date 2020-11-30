import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../../docentes.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  loaded: boolean=false;
  docentes: Array<Object> = [];
  constructor(private _service: DocentesService) { }

  //traer todos los cursos, en el onint se renderizan los components
  //llamo las funciones independientes dentro del init
  async ngOnInit() {
     this.loadDocentes();
    //  setTimeout(() => {
    //   this.loaded = !this.loaded; 
    //  }, 200);
  }
  async loadDocentes(){
    const docentes : any = await this._service.all();
    this.docentes = docentes;
  }
 
}