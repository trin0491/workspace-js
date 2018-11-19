import {Component, Injector, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnInit} from "@angular/core";

@Component({
  selector: "ws-widget-picker",
  template: `
    <div>
      <form>
        <button (click)="loadShared()">Load</button>
        <button (click)="unloadShared()">Unload</button>
        <input [(ngModel)]="widgetName" name="widgetName">
        <button (click)="requireWidget()">Require</button>
        <button (click)="addWidget()">Add</button>
      </form>
    </div>
  `,
  styles: []
})
export class WidgetPickerComponent implements OnInit {

  widgetName: string;

  private sharedModule: NgModuleRef<any>;
  private sharedModuleFactory: Promise<NgModuleFactory<any>>;

  constructor(private moduleLoader: NgModuleFactoryLoader, private injector: Injector) {
  }

  ngOnInit() {
  }

  requireWidget() {
    requirejs([this.widgetName], () => {
      this.addWidget();
    });
  }

  loadShared() {
    if (!this.sharedModuleFactory) {
      this.sharedModuleFactory = this.moduleLoader.load("src/app/shared.module#SharedModule");
    }
    if (!this.sharedModule) {
      this.sharedModuleFactory
        .then((factory) => factory.create(this.injector))
        .then((module: NgModuleRef<any>) => this.sharedModule = module)
        .catch((err) => console.error("Failed to load shared module: ", err));
    }
  }

  unloadShared() {
    if (this.sharedModule) {
      this.sharedModule.destroy();
      this.sharedModule = null;
    }
  }

  addWidget() {
    const elm = window.document.createElement(this.widgetName);
    if (elm) {
      window.document.body.appendChild(elm);
    }
  }
}
