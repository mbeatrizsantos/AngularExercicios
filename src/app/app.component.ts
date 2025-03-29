import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule], // para usar *ngIf
  templateUrl: './app.component.html', 
})
export class MeuComponente {
  status: string = 'sucesso';
}
