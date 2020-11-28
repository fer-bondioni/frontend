import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  curso: [] = []
  constructor(private service: CursosService, private activatedRoute : ActivatedRoute) { }

  async ngOnInit() {
     this.loadCurso();
    //  setTimeout(() => {
    //   this.loaded = !this.loaded; 
    //  }, 200);
  }
  async loadCurso(){
    const params = this.activatedRoute.snapshot.params.id;
    const cursos : any = await this.service.single(params);
    this.curso = cursos;
  }

}