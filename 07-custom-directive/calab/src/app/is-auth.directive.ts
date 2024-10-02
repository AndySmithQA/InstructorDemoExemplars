import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsAuth]',
  standalone: true
})


export class IsAuthDirective {

  constructor(private templateRef: TemplateRef<any>, private ViewContainer: ViewContainerRef) { }
  
  @Input() set appIsAuth(condition: boolean) {
    if (condition) {
      this.ViewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.ViewContainer.clear();
    }
  }
}
