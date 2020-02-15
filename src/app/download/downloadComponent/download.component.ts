import { Component, OnInit } from "@angular/core";
import { LayoutPreviewService } from "../../service/layout-preview.service";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.sass"]
})
export class DownloadComponent implements OnInit {
  constructor(public _layoutPreviewService: LayoutPreviewService) {}

  ngOnInit() {
    let node = this._layoutPreviewService.lastSavedLayout;
    document.getElementById("preview-layout").appendChild(node);
  }
}
