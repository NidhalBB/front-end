import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  constructor() { }
  show(param_div_id) {
    
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
  ngOnInit(): void {
  }

}
