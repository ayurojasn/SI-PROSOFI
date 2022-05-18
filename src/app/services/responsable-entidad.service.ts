import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsableEntidad } from '../models/responsable-entidad';

@Injectable({
  providedIn: 'root'
})
export class ResponsableEntidadService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<ResponsableEntidad[]>{
    return this.http.get<ResponsableEntidad[]>("http://localhost:8081/responsableEntidad/findAllResponsables/");
  }
}
