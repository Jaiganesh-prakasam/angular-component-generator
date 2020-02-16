import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LayoutPreviewService {
  public lastSavedLayout: any;
  public lastSavedJSON: Object[];
  constructor() {}
}
