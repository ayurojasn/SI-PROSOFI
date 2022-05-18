import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Docente[]>{
    return this.http.get<Docente[]>("http://localhost:8081/docente/findAllDocentes/");
  }
}
