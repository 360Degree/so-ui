import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class TimerService{
    public counter : number=1;
    public counter1 : number=86400; 
     
   constructor(){}

   startCounter(){
        return Observable.timer(0,1000).take(this.counter1).map(() => ++this.counter);
   }
   
}