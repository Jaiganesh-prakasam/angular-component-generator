import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import {  MatListModule } from '@angular/material/list';
import {  MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
