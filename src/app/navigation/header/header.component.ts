import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as saveAs from "file-saver";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
  downloadCheck() {
    let file = new Blob(["hello world"], { type: "text/ts;charset=utf-8" });
    saveAs(file, "helloworld.ts");
    let file1 = new Blob(["hello world"], { type: "text/css;charset=utf-8" });
    saveAs(file, "helloworld.css");
    let file2 = new Blob(["hello world"], { type: "text/html;charset=utf-8" });
    saveAs(file, "helloworld.html");
  }
}
