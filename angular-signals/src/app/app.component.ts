import { Component, signal, computed, effect, EffectRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // counter: number=0;
  counter = signal(0);

  course = signal({
    id:1,
    title: "Angular"
  });

  courses = signal([
    "Angular",
    "Reactive Angular"
  ]);

  derivedCounter = computed(() =>{
      // const counter = this.counter();
      const counter = this.counterService.counter();
      return counter*10;
  });

  multiplier: number = 0;

  // derivedCounter = computed(() =>{
  //   const counter = this.counter();
  //   // never add the signal variable (on which derived Signal variable is dependent) inside conditional block
  //   // as dependencies are calculated based on last invocation of computed function by angular
  //   if(this.multiplier>=10)
  //   {
  //     return counter*this.multiplier;
  //   }
  //   else{
  //     return 0;
  //   }
  // });

  effectRef: EffectRef;

    
  constructor(public  counterService: CounterService){
    this.effectRef = effect(( onCleanup)=>{

      onCleanup(()=>{
        console.log(`triggered when cleanup initiated`);
      });
      

      const counterValue = this.counter();
      const derivedCounterValue = this.derivedCounter();
      // this function is same as computed(), where angular keeps track of its dependencies based on its previous invocation

      console.log(`counter:${counterValue} derived counter: ${derivedCounterValue}`);
    }, {
      manualCleanup: true
    });

  }

  increment(){


    // dont mutate signal applied data directly as below, it bypasses signal functionality and uses default ChangeDetection
    // this.course().title = "Hello World";
    // this.courses().push("Angular Deep Dive");

    // // instead use this:
    // this.course.set({
    //   id:1,
    //   title:"Hello World"
    // });

    // this.courses.update(courses => [...courses, "Angular Deep Dive"]);

    // this.counter++;
    // this.counter.set(this.counter() + 1);
    // this.counter.update(val => val+1);

    this.counterService.increment();
  }

  incrementMultiplier(){
    this.multiplier++;
  }

  cleanup(){
    this.effectRef.destroy();
  }
}

