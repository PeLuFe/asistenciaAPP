import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Alumno } from './../../modelos/alumno'
import { Seccion } from './../../modelos/seccion'
import { AppComponent } from './../../app.component'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public agregarAlumno = new EventEmitter<Alumno>();
  @Input() secciones!: Array<Seccion>;
  public alumno: Alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0
  }
  public cambiarRut(evento: Event): void {
    const elementoRut = evento.target as HTMLInputElement;
    this.alumno.rut = elementoRut.value;
  }
  public cambiarNombre(evento: Event): void {
    const elementoNombre = evento.target as HTMLInputElement;
    this.alumno.nombre = elementoNombre.value;
  }
  public cambiarApellido(evento: Event): void {
    const elementoApellido = evento.target as HTMLInputElement;
    this.alumno.apellido = elementoApellido.value;
  }
  public cambiarEdad(evento: Event): void {
    const elementoEdad = evento.target as HTMLInputElement;
    this.alumno.edad = parseInt(elementoEdad.value);
  }
  public cambiarSeccion(evento: Event): void {
    const elementoSeccion = evento.target as HTMLSelectElement;
    this.alumno.seccion = elementoSeccion.value;
  }
  public guardarAlumno(): void {
    console.log(this.alumno);
    const copiaAlumno: Alumno = { ...this.alumno };
    this.agregarAlumno.emit(copiaAlumno);
    this.alumno.rut = '';
    this.alumno.nombre = '';
    this.alumno.apellido = '';
    this.alumno.edad = 0;
  }
}
