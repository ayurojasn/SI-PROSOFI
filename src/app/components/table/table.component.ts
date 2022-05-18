import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Docente } from 'src/app/models/docente';
import { Entidad } from 'src/app/models/entidad';
import { Involucrado } from 'src/app/models/involucrado';
import { Proyecto } from 'src/app/models/proyecto';
import { ResponsableEntidad } from 'src/app/models/responsable-entidad';
import { DocenteService } from 'src/app/services/docente.service';
import { EntidadService } from 'src/app/services/entidad.service';
import { InvolucradoService } from 'src/app/services/involucrado.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ResponsableEntidadService } from 'src/app/services/responsable-entidad.service';


interface Entity {
  value: number;
  name: String;
}

interface EntityR {
  value: number;
  name: String;
}

interface Project {
  value: number;
  name: String;
}
interface Involved {
  value: number;
  name: String;
}
interface Teacher {
  value: number;
  name: String;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9, symbol: 'Be'},

];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'entidad', 'responsable', 'proyecto', 'involucrado', 'docente'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  entidadList: Entidad[] = [];

  responsableEntidadList: ResponsableEntidad[] = [];

  proyectoList: Proyecto[] = [];

  involucradoList: Involucrado[] = [];

  docenteList: Docente[] = [];

  entidadNombreList: Object[] = [];

  entities: Entity[] = [];

  entitiesR: EntityR[] = [];

  projects: Project[] = [];

  involved: Involved[] = [];

  teacher: Teacher[] = [];

  j: number = 0;

  constructor(private entidadService: EntidadService, private responsableEntidadService: ResponsableEntidadService, private proyectoService: ProyectoService, private involucradoService: InvolucradoService, private docenteService: DocenteService) { 

  }

  ngOnInit(): void {

    this.entidadService.findAll().subscribe(entidadList => {
      this.entidadList = entidadList;
      console.log('entidadList', this.entidadList);
      this.j = 1;
      this.entidadList.forEach((i)=>{
        this.entities.push({value: this.j, name: i.nombre});
        this.j += 1;
      });
      console.log('nombres entidad: ', this.entities);
    });
 
    this.responsableEntidadService.findAll().subscribe(responsableEntidadList => {
      this.responsableEntidadList = responsableEntidadList;
      console.log('responsableEntidadList', this.responsableEntidadList);
      this.j = 1;
      this.responsableEntidadList.forEach((i)=>{
        this.entitiesR.push({value: this.j, name: i.nombre});
        this.j += 1;
      });
      console.log('nombres entidadResponsable: ', this.entitiesR);
    });

    this.proyectoService.findAll().subscribe(proyectoList => {
      this.proyectoList = proyectoList;
      console.log('proyectoList', this.proyectoList);
      this.j = 1;
      this.proyectoList.forEach((i)=>{
        this.projects.push({value: this.j, name: i.nombre});
        this.j += 1;
      });
      console.log('projects: ', this.projects);
    });

    this.involucradoService.findAll().subscribe(involucradoList => {
      this.involucradoList = involucradoList;
      console.log('involucradoList', this.involucradoList);
      this.j = 1;
      this.involucradoList.forEach((i)=>{
        this.involved.push({value: this.j, name: i.nombre});
        this.j += 1;
      });
      console.log('involucrado: ', this.involved);
    });

    this.docenteService.findAll().subscribe(docenteList => {
      this.docenteList = docenteList;
      console.log('docenteList', this.docenteList);
      this.j = 1;
      this.docenteList.forEach((i)=>{
        this.teacher.push({value: this.j, name: i.nombre_completo});
        this.j += 1;
      });
      console.log('docente: ', this.teacher);
    });
  }

}
