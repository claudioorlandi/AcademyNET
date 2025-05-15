import { Component } from '@angular/core';

@Component({
  selector: 'app-errorservice',
  imports: [],
  templateUrl: './errorservice.component.html',
  styleUrl: './errorservice.component.css'
})
export class ErrorserviceComponent {
mainErrorDescription: string ="";

ShowErrorDescription(error: string)
{alert('Descrizione Errore: ' + error)}
}
