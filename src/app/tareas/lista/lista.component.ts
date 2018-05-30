import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() aItems;
  @Output() evtBorrar: EventEmitter<number>;
  constructor() { 
    this.evtBorrar = new EventEmitter()
  }

  ngOnInit() {
  }

  btnBorrar(i) {
    this.evtBorrar.emit(i);
  }

}
