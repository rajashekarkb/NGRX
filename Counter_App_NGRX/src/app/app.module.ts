import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';

import {StoreModule} from '@ngrx/store'
import { counterReducer } from './store/counterReducer';
@NgModule({
  declarations: [
    AppComponent,
    CounterParentComponent,
    CounterActionsComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
