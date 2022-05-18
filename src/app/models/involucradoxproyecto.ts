import { Involucrado } from "./involucrado";
import { Proyecto } from "./proyecto";

export interface Involucradoxproyecto {
   idInvolucradoXProyecto: Number;
   proyecto: Proyecto;
   involucrado: Involucrado;
   forma_vinculacion: String;
}
