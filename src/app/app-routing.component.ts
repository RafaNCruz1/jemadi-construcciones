import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component'
import { AboutComponent } from './pages/about/about.component'

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'servicios',component:ServiciosComponent},
    {path:'portafolio',component:PortfolioComponent},
    {path:'contacto',component:ContactComponent},
    {path:'nosotros',component:AboutComponent},
    {path:'**',pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {'useHash':true})],
    exports: [RouterModule]
  })
export class AppRoutingModule{}