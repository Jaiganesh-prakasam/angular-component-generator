import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LayoutPreviewService } from "../../service/layout-preview.service";

export interface DialogData {
  labelName: string;
  id: string;
  type: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit, OnDestroy {
  labelName: string;
  id: string;
  todo = ["Input", "Radio Button", "Check Box", "Button"];
  done = [];
  formJson = [];

  constructor(
    public dialog: MatDialog,
    public _layoutPreviewService: LayoutPreviewService
  ) {}

  ngOnInit() {}
  ngOnDestroy() {
    let selectedComponent = document.getElementById("dropContainer");
    console.log(selectedComponent);
    console.log("home destroyed");
    this._layoutPreviewService.lastSavedLayout = selectedComponent;
  }

  drop(event: CdkDragDrop<string[]>) {
    // to capture only the drop event on the other container
    if (event.previousContainer !== event.container) {
      console.log(event.previousContainer.data[event.previousIndex]);
      this.elementDetailsPopup(
        event.previousContainer.data[event.previousIndex]
      );
    }
  }

  elementDetailsPopup(selectedElement) {
    switch (selectedElement) {
      case "Input":
        this.inputGenerator();
        break;
      case "Radio Button":
        break;
      case "Check Box":
        break;
      case "Button":
        break;
    }
  }
  inputGenerator() {
    const dialogRef = this.dialog.open(inputContentAttributesDialog, {
      width: "250px",
      data: {
        fieldType: "input",
        name: "",
        type: "",
        placeholder: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.labelName = result.labelName;
      if (result) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("value", "Hello World!");
        x.setAttribute("placeholder", "Hello World!");
        document.getElementById("dropContainer").appendChild(x);
        this.jsonUpdater(result);
      }
      console.log(result);
    });
  }
  jsonUpdater(pushObject) {
    this.formJson.push(pushObject);
    document.getElementById("json").innerHTML = JSON.stringify(
      this.formJson,
      undefined,
      2
    );
  }
  check(x) {
    console.log(x);
  }
}

@Component({
  selector: "input-content-attributes",
  templateUrl: "input-content-attributes.html"
})
export class inputContentAttributesDialog {
  constructor(
    public dialogRef: MatDialogRef<inputContentAttributesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  cancelClick(): void {
    this.dialogRef.close();
  }
}
