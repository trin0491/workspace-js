import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ws-widget-picker",
  template: `
    <div>
      <form>
        <input [(ngModel)]="widgetName" name="widgetName">
        <button (click)="loadElement()">Load</button>
        <button (click)="addElement()">Add</button>
      </form>
    </div>
  `,
  styles: []
})
export class WidgetPickerComponent implements OnInit {

  widgetName: string;

  constructor() {
  }

  ngOnInit() {
  }

  loadElement() {
    requirejs([this.widgetName], () => {
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
