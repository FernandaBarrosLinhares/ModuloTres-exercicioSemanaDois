import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-tres',
  templateUrl: './exercicio-tres.component.html',
  styleUrls: ['./exercicio-tres.component.css']
})
export class ExercicioTresComponent {
  array: string[]=["Aluno 2", "Aluno 3","lasanha"];

  isiraNoInicio(valor: string){
    this.array.unshift(valor);
    return this.array;
  }

  removaItem(valor:string){
    let index = this.array.indexOf(valor);
    if(index != -1){
      this.array.splice(index,1);

    }
    return this.array;
  }

  validaItemNoArray(string: string) : number {
    for(let item of this.array){
      if (string === item){
        return this.array.indexOf(item);
      }
    }
    throw new Error("Item não encontrado no array")
  }

}
