import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/servicer/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
 

  constructor(private settingsServices:SettingsService) { }

  ngOnInit(): void {


    this.settingsServices.checkCurrentTheme();  

  }
  changeTheme(theme:string){
    this.settingsServices.changeTheme(theme);

  }





}
