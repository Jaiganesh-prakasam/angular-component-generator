import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../material/material.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";

import {
  HomeComponent,
  inputContentAttributesDialog
} from "./homeComponent/home.component";

@NgModule({
  entryComponents: [inputContentAttributesDialog],
  declarations: [HomeComponent, inputContentAttributesDialog],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
