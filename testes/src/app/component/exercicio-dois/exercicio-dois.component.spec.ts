import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDoisComponent } from './exercicio-dois.component';

describe('ExercicioDoisComponent', () => {
  let component: ExercicioDoisComponent;
  let fixture: ComponentFixture<ExercicioDoisComponent>;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicioDoisComponent]
    });
    fixture = TestBed.createComponent(ExercicioDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calcularMedia deve retornar a média de 3 números quando chamado', () => {
    let media = component.calcularMedia(1,2,3);

    expect(media).toEqual(2);
  });

});

