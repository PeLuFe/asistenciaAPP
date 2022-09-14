import { Component } from '@angular/core';

import { Seccion } from './modelos/seccion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaSeccion: Array<Seccion> = [
    {idSeccion: 0,
    nombre: ''},
  ]
  public agregarSeccion(nueva: Seccion): void {
    const idNueva = this.listaSeccion.length + 1;
    nueva.idSeccion = idNueva;
    this.listaSeccion.push(nueva)
  }
}
