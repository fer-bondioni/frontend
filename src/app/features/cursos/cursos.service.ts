import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends BaseService {
  common: string = 'cursos'
  all(){
    this.setEndPoint(`${this.common}/all`);
    return this.get();
  }
  single(id){
    this.setEndPoint(`${this.common}/single/${id}`);
    return this.get();
  }
  
}
