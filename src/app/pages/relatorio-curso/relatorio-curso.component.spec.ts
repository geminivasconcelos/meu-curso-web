import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioCursoComponent } from './relatorio-curso.component';

describe('RelatorioCursoComponent', () => {
  let component: RelatorioCursoComponent;
  let fixture: ComponentFixture<RelatorioCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
