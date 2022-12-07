import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit{
 

  public Counter:number = 0; 
  constructor(private _store:Store<{Counter:{Counter:number}}>){}

  ngOnInit(){
    this._store.select('Counter').subscribe(res=>{
       //console.log(res);
       //console.log(this.Counter);
       this.Counter = res.Counter;
       
    })
  }

}
