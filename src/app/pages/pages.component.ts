import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../servicer/settings.service';
declare function customInitFunctions():any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private settingsServices:SettingsService) { }

  ngOnInit(): void {

    customInitFunctions();
  }

}

