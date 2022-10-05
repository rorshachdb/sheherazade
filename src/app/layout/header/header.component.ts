import { Component, OnInit } from '@angular/core';
import {WindowService} from "@services/electron/window.service";

@Component({
  selector: 'shz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Sheherazade';


  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
  }

  closeApp = () => this.windowService.closeApp();

  maximizeApp = () => this.windowService.maximizeApp();

  unMaximizeApp = () => this.windowService.unMaximizeApp();

  reduceApp = () => this.windowService.reduceApp();

}
