import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DeuteriumWidgetComponent } from "./deuterium-widget.component";

describe("DeuteriumWidgetComponent", () => {
  let component: DeuteriumWidgetComponent;
  let fixture: ComponentFixture<DeuteriumWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuteriumWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuteriumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
