import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ExercicioTresComponent } from './exercicio-tres.component';

describe('ExercicioTresComponent', () => {
  let component: ExercicioTresComponent;
  let fixture: ComponentFixture<ExercicioTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicioTresComponent]
    });
    fixture = TestBed.createComponent(ExercicioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve adicionar ao inicio de Array quando chamado', ()=>{
    let valor ='Aluno 1';
    let array = component.isiraNoInicio(valor);

    expect(array[0] == valor).toEqual(true);
  })
  //Exercicio 4
  it('deve aumentar o Array quando adicionar mais um item', ()=>{
    let tamanhoArray = component.array.length;
    let array = component.isiraNoInicio('Aluno 1');

    expect(component.array.length).toBeGreaterThan(tamanhoArray);
  })

  it('deve remover o item do array quando chamado',()=>{
    let tamanhoArray = component.array.length;
    component.removaItem("Aluno 3");

    expect(component.array.length).toBeLessThan(tamanhoArray);
  })

  //Exercicio 5

  it('Deve validar o uso do matcher toContain', () => {
    let comida = ["lasanha"];
    expect(comida).toContain("lasanha");
});

//Exercicio 6

it( 'Deve lançar erro se falhar na verificação se item existe quando chamado', ()=>{

  let value = "teste"

  expect(function(){component.validaItemNoArray(value)}).toThrow(new Error("Item não encontrado no array"));

})

});
