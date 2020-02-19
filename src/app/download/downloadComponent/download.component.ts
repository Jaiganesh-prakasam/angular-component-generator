import { Component, OnInit } from "@angular/core";
import { LayoutPreviewService } from "../../service/layout-preview.service";
import * as saveAs from "file-saver";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.sass"]
})
export class DownloadComponent implements OnInit {
  node: any;
  constructor(public _layoutPreviewService: LayoutPreviewService) {}

  ngOnInit() {
    this.node = this._layoutPreviewService.lastSavedLayout;
    if (this.node)
      document.getElementById("preview-layout-card").appendChild(this.node);
  }
  downloadFile() {
    let tsFileDAta = `
    import { Component, OnInit } from "@angular/core";

    @Component({
      selector: "componentName",
      templateUrl: "./componentName.component.html",
      styleUrls: ["./componentName.component.sass"]
    })

    export class componentNameComponent implements OnInit {  
    
      constructor() {}
      ngOnInit() {}
    
    }
    `;
    if (this._layoutPreviewService.lastSavedLayout) {
      let file = new Blob([tsFileDAta], { type: "text/ts;charset=utf-8" });
      saveAs(file, "componentName.component.ts");

      let file1 = new Blob([], { type: "text/css;charset=utf-8" });
      saveAs(file1, "componentName.component.css");

      let file2 = new Blob([this.node.innerHTML], {
        type: "text/html;charset=utf-8"
      });
      saveAs(file2, "componentName.component.html");
      // console.log(`${this.node.innerHTML}`);
    } else {
      alert("please create fields in layout before downloading");
    }
  }
}
