import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../material/material.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DownloadComponent } from "./downloadComponent/download.component";

@NgModule({
  declarations: [DownloadComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, DragDropModule],
  exports: [DownloadComponent]
})
export class DownloadModule {}
