import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioDoisComponent } from './component/exercicio-dois/exercicio-dois.component';
import { ExercicioTresComponent } from './exercicio-tres/exercicio-tres.component';
import { ExerciciosTestesComponent } from './componet/exercicios-testes/exercicios-testes.component';
import { ExercicoSeteComponent } from './component/exercico-sete/exercico-sete.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioDoisComponent,
    ExercicioTresComponent,
    ExerciciosTestesComponent,
    ExercicoSeteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
