import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../material/material.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import {
  HomeComponent,
  inputContentAttributesDialog,
  buttonContentAttributesDialog
} from "./homeComponent/home.component";

@NgModule({
  entryComponents: [
    inputContentAttributesDialog,
    buttonContentAttributesDialog
  ],
  declarations: [
    HomeComponent,
    inputContentAttributesDialog,
    buttonContentAttributesDialog
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
