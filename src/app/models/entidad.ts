import { Proyecto } from "./proyecto";
import { ResponsableEntidad } from "./responsable-entidad";

export interface Entidad {
    idEntidad: Number;
    nombre: String;
    celular: String;
    direccion: String;
    descripcion: String;
    fecha_vinculacion: Date;
    responsable_entidad: ResponsableEntidad[];
    proyectos: Proyecto[];

}
