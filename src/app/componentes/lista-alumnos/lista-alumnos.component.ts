import { Component, Input } from '@angular/core';

import { Alumno } from './../../modelos/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input() alumnos!: Array<Alumno>;
}
