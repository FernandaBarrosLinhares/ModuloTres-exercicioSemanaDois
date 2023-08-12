import { ComponentFixture, TestBed } from '@angular/core/testing';

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
  it('deve adicionar ao inicio de Array, quando chamado', ()=>{
    let valor ='Aluno 1';
    let array = component.iserirNoInicio(valor);

    expect(array[0]== valor).toBe(true);
  })
});
