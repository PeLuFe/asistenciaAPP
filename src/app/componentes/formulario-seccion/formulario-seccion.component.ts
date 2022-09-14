import { Component, EventEmitter, Output } from '@angular/core';

import { Seccion } from './../../modelos/seccion'

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public agregarSeccion = new EventEmitter<Seccion>();
  public seccion: Seccion = {
    nombre: ''
  };
  public cambiarNombre(evento: Event): void {
    const elementoNombre = evento.target as HTMLInputElement;
    this.seccion.nombre = elementoNombre.value;
  }
  public guardarSeccion(): void {
    console.log(this.seccion);
    const copiaSeccion: Seccion = { ...this.seccion };
    this.agregarSeccion.emit(copiaSeccion);
    this.seccion.nombre = '';
  }
}
