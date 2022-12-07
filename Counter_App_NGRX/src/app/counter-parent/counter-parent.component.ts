import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {
   //Counter=0;
  constructor(){}

  ngOnInit():void{

  }

  // onIncrement(){
  //   this.Counter++
  // }
  // onDecrement(){
  //   this.Counter--
  // }
  // onReset(){
  //   this.Counter = 0;
  // }
}
