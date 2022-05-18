import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>("http://localhost:8081/proyecto/findAllProyectos/");
  }
}
