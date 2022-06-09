import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  //transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  // transferir($event) {
  //   console.log($event);
  //   this.service.adicionar($event);
  //   // const transferencia = {...$event, data:new Date()};
  //   // this.transferencias.push(transferencia);
  // }
}
