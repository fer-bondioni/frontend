import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class DocentesService extends BaseService {
  common: string = 'docentes'
  all(){
    this.setEndPoint(`${this.common}/all`);
    return this.get();
  }
  single(id){
    this.setEndPoint(`${this.common}/single/${id}`);
    return this.get();
  }
  create(obj){
    this.setEndPoint(`${this.common}/create`);
    return this.post(obj);
  }
  
}
