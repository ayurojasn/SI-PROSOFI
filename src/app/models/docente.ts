import { Involucrado } from "./involucrado";
export interface Docente {
    idDocente: Number;
    facultad: String;
    tipo_documento: String;
    documento: String;
    correo_javeriano: String;

    nombre_completo: String;
    involucrado: Involucrado;
}
