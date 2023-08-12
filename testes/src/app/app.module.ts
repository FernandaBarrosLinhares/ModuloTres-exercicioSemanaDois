import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioDoisComponent } from './component/exercicio-dois/exercicio-dois.component';
import { ExercicioTresComponent } from './exercicio-tres/exercicio-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioDoisComponent,
    ExercicioTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
