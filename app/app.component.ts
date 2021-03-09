import { Component } from "@angular/core";
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";
import { sampleData, displayDate } from "./events-utc";

@Component({
  selector: "my-app",
  template: `
    <div class="example-config">
      <label>
        Group Orientation
        <kendo-dropdownlist
          [data]="['horizontal', 'vertical']"
          [value]="group.orientation"
          [valuePrimitive]="true"
          (valueChange)="onOrientationChange($event)"
        >
        </kendo-dropdownlist>
      </label>
    </div>

    <kendo-scheduler
      [editable]="true"
      [kendoSchedulerBinding]="events"
      [selectedDate]="selectedDate"
      [group]="group"
      [resources]="resources"
      style="height: 400px;"
    >
      <kendo-scheduler-timeline-view> </kendo-scheduler-timeline-view>

      <kendo-scheduler-timeline-week-view> </kendo-scheduler-timeline-week-view>
    </kendo-scheduler>
  `
})
export class AppComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  public group: any = {
    resources: ["Fourgon"],
    orientation: "vertical"
  };

  public resources: any[] = [
    {
      name: "Fourgon",
      data: [
        { text: "Fourgon 101", value: 1, color: "#6eb3fa" },
        { text: "Fourgon 201", value: 2, color: "#f58a8a" },
        { text: "Fourgon 301", value: 3, color: "#yellow" },
        { text: "Fourgon 401", value: 4, color: "#8af5c0" }
      ],
      field: "roomId",
      valueField: "value",
      textField: "text",
      colorField: "color"
    }
  ];

  public onOrientationChange(value: any): void {
    this.group = { ...this.group, orientation: value };
  }
}
