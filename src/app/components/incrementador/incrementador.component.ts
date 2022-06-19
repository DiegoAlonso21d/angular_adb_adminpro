import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  
  @Input("valor") progreso:number=40;
  @Input() btnClase:string= 'btn-primary';
  @Output() ValorSalida:EventEmitter<number>=new EventEmitter();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.btnClase=`btn ${this.btnClase}`;
  }

  cambiaValor(valor:number){
     this.progreso=this.progreso+valor;
     this.ValorSalida.emit(this.progreso);

    if(this.progreso>= 100 &&  valor>0){
      this.ValorSalida.emit(100);
        this.progreso=100;
    }
    if(this.progreso<=0 && valor<0){
      this.ValorSalida.emit(0);
       this.progreso=0;
    }
    
  }

  onChange(nuevoValor:number){
    
    
    if(nuevoValor>=100){
      this.progreso=100;
    }else if(nuevoValor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevoValor;
    }
    this.ValorSalida.emit(this.progreso);






    
  }
 


}
