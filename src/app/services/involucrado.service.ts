import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Involucrado } from '../models/involucrado';

@Injectable({
  providedIn: 'root'
})
export class InvolucradoService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<Involucrado[]>{
    return this.http.get<Involucrado[]>("http://localhost:8081/involucrado/findAllInvolucrados/");
  }

}
