import {Component, Injector, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnInit} from "@angular/core";

@Component({
  selector: "ws-widget-picker",
  template: `
    <div>
      <form>
        <input [(ngModel)]="widgetName" name="widgetName">
        <button (click)="requireElement()">Require</button>
        <button (click)="loadElement()">Load</button>
        <button (click)="addElement()">Add</button>
      </form>
    </div>
  `,
  styles: []
})
export class WidgetPickerComponent implements OnInit {

  widgetName: string;

  constructor(private moduleLoader: NgModuleFactoryLoader, private injector: Injector) {
  }

  ngOnInit() {
  }

  requireElement() {
    requirejs([this.widgetName], () => {
      this.addElement();
    });
  }

  loadElement() {
    this.moduleLoader.load("src/app/lazy.module#LazyModule").then((factory: NgModuleFactory<any>) => {
      const module: NgModuleRef<any> = factory.create(this.injector);
      this.addElement();
    });
  }

  addElement() {
    const elm = window.document.createElement(this.widgetName);
    if (elm) {
      window.document.body.appendChild(elm);
    }
  }
}
