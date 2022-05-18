import { Entidad } from "./entidad";
import { Involucrado } from "./involucrado";
import { Involucradoxproyecto } from "./involucradoxproyecto";

export interface Proyecto {
    idProyecto: Number;
    nombre: String;
    descripcion: String;
    objetivos: String;
    fecha_inicio: Date;
    fecha_fin: Date;
    documento_lider: String;
    entidad: Entidad;
    lider: Involucrado;
    involucrados: Involucradoxproyecto[]; 

}
