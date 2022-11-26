import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

//OnDestroy es para ocultar o eliminar ese componente dependendiendo de X-
//Cambios en el componente para OnChanges.
//Estos 3 son los mas habituales pero hay mas para el ciclo de vida

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input() nombre: string = "default";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  constructor(){}
  ngOnDestroy(): void {
    console.log( "ngOnDestroy el componente va a desaparecer");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log( "ngOnChanges el componente recibe cambios", changes);
  }

  ngOnInit(): void {
    //Instrucciones previas a la renderizacion del componente
    console.log( "ngOnInit del component Saludo");
  }

  //Ejemplo para gestionar un Evento de tipo click en el DOM.

  // alertaSaludo(): void{
  //   alert(`Hola, ${this.nombre}. Alerta despachada desde un click del boton`);
  // }
  enviarMensajePadre(){
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click del boton`);
  }

}

//Orden del ciclo de vida
//* 1. ngOnChange
//* 2. ngOnInit
// 3.ngAfterContentInit
// 4. ngAfterContentChecked
// 5. ngAfterViewInit
// 6. ngAfterViewChecked
// 7. ngAfterContentChecked
// 8. ngAfterViewChecked
//* 9. ngOnDestroy