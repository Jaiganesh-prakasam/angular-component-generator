import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { DownloadModule } from "./download/download.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { MaterialModule } from "./material/material.module";
import { AboutComponent } from "./about/aboutComponent/about.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  entryComponents: [],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    AboutModule,
    DownloadModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
