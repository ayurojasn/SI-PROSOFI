import { Docente } from "./docente";
import { Involucradoxproyecto } from "./involucradoxproyecto";

export interface Involucrado {
    idInvolucrado: Number;
    tipo_documento: String;
    documento: String;
    tipo_involucrado: String;
    nombre: String;
    telefono: String;
    celular: String;
    correo_javeriano: String;
    correo_externo: String;
    fecha_nacimiento: Date;
    cargo_administrativo: String;
    facultad: String;
    carrera: String;
    organizacion_voluntario: String;
    involucradoxproyecto: Involucradoxproyecto[];
    docente: Docente;
}
