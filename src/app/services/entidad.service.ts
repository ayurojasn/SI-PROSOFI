import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad';


@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Entidad[]>{
    return this.http.get<Entidad[]>("http://localhost:8081/entidad/findAllEntidades/");
  }
}
