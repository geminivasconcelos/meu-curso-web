
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonDefaulWhiteComponent } from '../button-defaul-white/button-defaul-white.component';
import { ButtonDefaultComponent } from '../button-default/button-default.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ButtonDefaultComponent,
    ButtonDefaulWhiteComponent,
    // ButtonModule,
  ],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() subtitleDefaoult: string = '';
  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}

