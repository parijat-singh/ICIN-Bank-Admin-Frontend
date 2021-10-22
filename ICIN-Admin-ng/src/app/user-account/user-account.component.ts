import { Component, OnInit } from '@angular/core';
import { EnableService } from '../enable.service'
import { DisableService } from '../disable.service';
import { FeaturesService } from '../features.service';
import { UsersService } from '../users.service';
import { UserData } from '../model/userData';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  roles = [
    { name: " ", value: 0 },
    { name: "Deposit", value: 1 },
    { name: "Deposit & Withdraw", value: 2 },
    { name: "Deposit, Withdraw & Transfer", value: 3 }
  ]

  users: any[]
  constructor(public enableService: EnableService, public disableService: DisableService, public featuresService: FeaturesService, private service: UsersService) {

  }
  selectedValue: number;

  ngOnInit() {
    this.service.getAllUsers().subscribe(res => {
      res.forEach(element => {

        if (element.featureStatus == 1) {
          element.featureStatus = this.roles[1].name
        }
        if (element.featureStatus == 2) {
          element.featureStatus = this.roles[2].name
        }
        if (element.featureStatus == 3) {
          element.featureStatus = this.roles[3].name
        }
      });
      this.users = res

    });
  }


  filterSelected(selectedValue) {
    this.selectedValue = selectedValue
  }

  enableLoginService(username) {
    this.enableService.enableLoginService(username).subscribe(res => this.ngOnInit());
  }

  disableLoginService(username) {
    this.disableService.disableLoginService(username).subscribe(res => this.ngOnInit());
  }

  setOption(username) {

    this.featuresService.setFeatures(username, this.selectedValue).subscribe(res => this.ngOnInit());
  }



}
