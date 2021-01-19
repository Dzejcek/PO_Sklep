import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {

  constructor() { }
  cantNext
  cantNext2
  cantNext3
  ngOnInit(): void {
  }
  bind(isValid){
    console.log(isValid)
    this.cantNext=isValid
  }

  bind2(isValid){
    this.cantNext2=isValid
  }
  bind3(isValid){
    this.cantNext3=isValid
  }

}
