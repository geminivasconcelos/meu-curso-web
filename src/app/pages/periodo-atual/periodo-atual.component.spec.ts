import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoAtualComponent } from './periodo-atual.component';

describe('PeriodoAtualComponent', () => {
  let component: PeriodoAtualComponent;
  let fixture: ComponentFixture<PeriodoAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodoAtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodoAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
