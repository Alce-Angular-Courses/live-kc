import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tareas',
  template: `
    <div class="row">
      <kc-control-tareas class="col"></kc-control-tareas>
    </div>
  `,
  styles: []
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
