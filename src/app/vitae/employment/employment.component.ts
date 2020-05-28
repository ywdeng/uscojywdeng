import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../../local-data.service"

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.styl']
})
export class EmploymentComponent implements OnInit {
  empData: {};

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.localData.getJSON("assets/employment.json").subscribe(data => {
      this.empData = data;
      this.prepareData(this.empData);
    });
  }
  prepareData(data): void {
    data["employment"].forEach(item => {
      item.organization = "<a target='_blank' href='" + item["orgLink"] + "'>" + item["orgName"] + "</a>"
    });
  }
}
