import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, double, increment, reset } from '../store/counterActions';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent  implements OnInit {
  // @Output() increment = new EventEmitter();
  // @Output() decrement = new EventEmitter();
  // @Output() reset = new EventEmitter();

  constructor(private _store:Store<{Counter:{Counter:number}}>){}

  ngOnInit(){
  }

  onIncrement(){
    // this.increment.emit()
    this._store.dispatch(increment());
  }

  onDecrement(){
    // this.decrement.emit()
    this._store.dispatch(decrement())
  }

  onReset(){
    // this.reset.emit()
    this._store.dispatch(reset())

  }

  onDouble(){
    // this.reset.emit()
    this._store.dispatch(double())

  }

}
