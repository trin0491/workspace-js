import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ws-widget-picker",
  template: `
    <div>
      <form>
        <input [(ngModel)]="widgetName" name="widgetName">
        <button (click)="add()">Add</button>
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

  add() {
    require.config({
      baseUrl: "/dist",
      paths: {
        "some": "some/v1.0"
      },
      waitSeconds: 15
    });
    requirejs([this.widgetName], () => {
      const elm = window.document.createElement(this.widgetName);
      if (elm) {
        window.document.body.appendChild(elm);
      }
    });
  }
}
