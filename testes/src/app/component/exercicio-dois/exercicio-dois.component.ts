import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.css']
})
export class ExercicioDoisComponent {
    

  calcularMedia(numero1: 1,numero2: 2,numero3: 3): number{
    return (numero1 + numero2 + numero3)/3;

  }


}
