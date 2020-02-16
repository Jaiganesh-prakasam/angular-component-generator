import { Component, OnInit, Inject, OnDestroy, Input } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LayoutPreviewService } from "../../service/layout-preview.service";

export interface DialogData {
  id: string;
  placeholder: string;
  type: string;
  label: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit, OnDestroy {
  id: string;
  todo = ["Input", "Radio Button", "Check Box", "Button"];
  done = [];
  formJson: Object[];

  constructor(
    public dialog: MatDialog,
    public _layoutPreviewService: LayoutPreviewService
  ) {}

  ngOnInit() {
    // to populate Layout and JSON card with previous values
    if (this._layoutPreviewService.lastSavedLayout) {
      let node = this._layoutPreviewService.lastSavedLayout;
      document.getElementById("drop-container-card").appendChild(node);

      this.formJson = this._layoutPreviewService.lastSavedJSON;
      document.getElementById("json").innerHTML = JSON.stringify(
        this.formJson,
        undefined,
        2
      );
    }
  }

  ngOnDestroy() {
    // to save the form layout in a service to access in download page
    let selectedComponent = document.getElementById("drop-container-div");
    this._layoutPreviewService.lastSavedLayout = selectedComponent;
    this._layoutPreviewService.lastSavedJSON = this.formJson;
  }

  drop(event: CdkDragDrop<string[]>) {
    // to capture only the drop event on the other container
    if (event.previousContainer !== event.container) {
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
        label: "",
        fieldType: "input",
        id: "",
        type: "",
        placeholder: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let parentElement = document.getElementById("drop-container-div");
        let labelElement = document.createElement("LABEL");
        let labelName = document.createTextNode(result.label);
        labelElement.style.fontSize = "30px";
        labelElement.appendChild(labelName);
        parentElement.appendChild(labelElement);
        let InputElement = document.createElement("INPUT");
        InputElement.style.height = "40px";
        InputElement.style.fontSize = "30px";
        InputElement.setAttribute("type", result.type);
        InputElement.setAttribute("placeholder", result.placeholder);
        InputElement.id = result.id;
        parentElement.appendChild(InputElement);
        this.jsonUpdater(result);
      }
      console.log(result);
    });
  }
  jsonUpdater(pushObject) {
    if (this.formJson) {
      this.formJson.push(pushObject);
    } else {
      this.formJson = [pushObject];
    }
    console.log(this.formJson);
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
