import { Component } from '@angular/core';

@Component({
  selector: 'button[app-button-default]',
  standalone: true,
  imports: [],
  // templateUrl: './button-default.component.html',
  template: `<ng-content />`,
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {}
