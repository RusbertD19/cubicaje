import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarCubicajeComponent } from './pagina/mostrar-cubicaje/mostrar-cubicaje.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { RegistroCajaComponent } from './registro-caja/registro-caja.component';



const routes: Routes = [
    { path: 'mostrar-cubicaje', component: MostrarCubicajeComponent},
    { path: 'registro-producto', component: RegistroProductoComponent},
    { path: 'registro-caja', component: RegistroCajaComponent},

    { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }