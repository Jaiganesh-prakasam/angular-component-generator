import { Component, OnInit } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  todo = ["Input", "Radio Button", "Check Box", "Button"];

  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      console.log(event.previousContainer.data[event.previousIndex]);
    }
  }
  constructor() {}

  ngOnInit() {}

  public executeSelectedChange = event => {
    console.log(event);
  };
}
