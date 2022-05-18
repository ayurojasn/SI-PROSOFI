import { Entidad } from "./entidad";

export interface ResponsableEntidad {
    idResponsableEntidad: Number;
    documento: String;
    tipo_documento: String;
    nombre: String;
    telefono: String;
    celular: String;
    correo: String;
    entidad: Entidad;
}
