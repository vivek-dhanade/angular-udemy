  import { Directive, ViewContainerRef, TemplateRef, Input, HostBinding } from '@angular/core';

  @Directive({
    selector: '[ngxUnless]'
  })
  export class NgxUnlessDirective {

    visible = false;

    @HostBinding('style.display')
    get ImageVisibleStyle()
    {
      return this.visible? 'block': 'none';
    }

    constructor(private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) {

    }

    @Input()
    set ngxUnless(condition: boolean){
      if(!condition && !this.visible)
      {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.visible=true;
      }
      else if(condition && this.visible)
      {
        this.viewContainer.clear();
        this.visible=false;
      }
    }

  }
