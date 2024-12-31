import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')

  isHighlighted=false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log("directive created");
  }

  @HostBinding('class.highlighted')
  get highlightedClass(){
    return this.isHighlighted;
  }

  // @HostBinding('style.border')
  // get cssClasses(){
  //   return "3px solid red";
  // }

  @HostListener('mouseover',["$event"])
  mouseOver($event){
    // console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave',["$event"])
  mouseLeave($event){
    // console.log($event);
    this.isHighlighted=false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    if(this.isHighlighted)
    {
      console.log("TOGGLED");
      this.isHighlighted = false;
    }
    else
    {
      console.log("TOGGLED");
      this.isHighlighted=true;
    }
    
  }

}
