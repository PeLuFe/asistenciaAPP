import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    HistorialComponent,
    ListaAlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
