import { DatePipe } from "@angular/common";
import { Alumno } from './alumno'

export interface RegistroHistorial {
  fecha: DatePipe
  alumno: Alumno
}
