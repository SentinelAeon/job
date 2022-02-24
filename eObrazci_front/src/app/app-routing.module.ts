import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ObrazciViewComponent } from './obrazci-view/obrazci-view.component';
import { IzpitiViewComponent } from './izpiti-view/izpiti-view.component';
import { DodajObrazecViewComponent } from './dodaj-obrazec-view/dodaj-obrazec-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent},  
  { path: '', component: HomeComponent, children: [

    { path: 'obrazci', component: ObrazciViewComponent, canActivate: [AuthGuard] },
    { path: 'obrazci/:id/izpiti', component: IzpitiViewComponent, canActivate: [AuthGuard] },
    { path: 'obrazci/novObrazec', component: DodajObrazecViewComponent, canActivate: [AuthGuard] },  
    
  ]},
  { path: '**', redirectTo: 'obrazci', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/