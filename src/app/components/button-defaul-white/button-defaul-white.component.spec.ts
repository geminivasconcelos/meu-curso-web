import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDefaulWhiteComponent } from './button-defaul-white.component';

describe('ButtonDefaulWhiteComponent', () => {
  let component: ButtonDefaulWhiteComponent;
  let fixture: ComponentFixture<ButtonDefaulWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDefaulWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDefaulWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
