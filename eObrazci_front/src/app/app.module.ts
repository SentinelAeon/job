import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IzpitiViewComponent } from './izpiti-view/izpiti-view.component';
import { ObrazciViewComponent } from './obrazci-view/obrazci-view.component';
import { DodajObrazecViewComponent } from './dodaj-obrazec-view/dodaj-obrazec-view.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';






@NgModule({
  declarations: [
    AppComponent,
    IzpitiViewComponent,
    ObrazciViewComponent,
    DodajObrazecViewComponent,
    LoginComponent, 
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    
   
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
