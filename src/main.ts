import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TestComponent, FormsModule],
  template: `
  {{name}}
  <input type="text" [value]="name" />

   <input type="text" [(ngModel)]="name" />
  
  `,
})
export class App {
  name = 3;
}

bootstrapApplication(App);
