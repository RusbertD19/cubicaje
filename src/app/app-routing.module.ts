import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarCubicajeComponent } from './pagina/mostrar-cubicaje/mostrar-cubicaje.component';



const routes: Routes = [
    { path: '/mostrar-cubicaje', component: MostrarCubicajeComponent},
    { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }