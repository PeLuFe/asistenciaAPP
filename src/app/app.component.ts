import { Component, Output } from '@angular/core';

import { Seccion } from './modelos/seccion'
import { Alumno } from './modelos/alumno'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaSeccion: Array<Seccion> = []
  public agregarSeccion(nueva: Seccion): void {
    const idNueva = this.listaSeccion.length + 1;
    nueva.idSeccion = idNueva;
    this.listaSeccion.push(nueva)
  }
  public listaAlumno: Array<Alumno> = []
  public agregarAlumno(nuevo: Alumno): void {
    this.listaAlumno.push(nuevo)
  }
}
