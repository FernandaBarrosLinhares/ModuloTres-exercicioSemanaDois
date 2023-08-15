import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicoSeteComponent } from './exercico-sete.component';

describe('ExercicoSeteComponent', () => {
  let component: ExercicoSeteComponent;
  let fixture: ComponentFixture<ExercicoSeteComponent>;
  let adicional : number = 0;

  beforeEach(async() => {
     await TestBed.configureTestingModule({
      declarations: [ExercicoSeteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicoSeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let adicional : number = 0;
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 1º', ()=>{

    expect(adicional).toEqual(10);
  })

  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 2º', ()=>{

    expect(adicional).toEqual(20);
  })
  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 3º', ()=>{

    expect(adicional).toEqual(30);
  })
  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 4º', ()=>{

    expect(adicional).toEqual(40);
  })
  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 5º', ()=>{

    expect(adicional).toEqual(50);
  })
  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 6º', ()=>{

    expect(adicional).toEqual(60);
  })
  it('Deve somar o adicional à veriável n quando chamada a função retornaN - 7º', ()=>{

    expect(adicional).toEqual(70);
  })
});
