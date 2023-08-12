import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-tres',
  templateUrl: './exercicio-tres.component.html',
  styleUrls: ['./exercicio-tres.component.css']
})
export class ExercicioTresComponent {

  array: string[]=[];

  iserirNoInicio(valor: 'Aluno 1'){
    this.array.unshift(valor);
    return this.array;
  }

}
