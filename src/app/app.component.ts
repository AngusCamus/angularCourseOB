import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre o id o etiqueta
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicapp';
  usuario = "@masajo";


    //esta funcion se ejecuta cuando el hijo (saludoComponent) pulse el boton
  recibirMensajeHijo(event: string){
      alert(event);
  }
}
