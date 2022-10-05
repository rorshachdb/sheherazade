import { Injectable } from '@angular/core';
import {ServicesModule} from "../services.module";

@Injectable({
  providedIn: ServicesModule
})
export class WindowService {

  constructor() { }

  public closeApp() {
    windowBridge.closeApp();
  }

  public maximizeApp() {
    windowBridge.maximizeApp();
  }

  public unMaximizeApp() {
    windowBridge.unMaximizeApp();
  }

  public reduceApp() {
    windowBridge.reduceApp();
  }

}
