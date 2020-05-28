import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../../local-data.service"

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.styl']
})
export class TrainingComponent implements OnInit {
  trainData: {};

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.localData.getJSON("assets/training.json").subscribe(data => {
      this.trainData = data;
      this.prepareData(this.trainData);
    });
  }
  prepareData(data): void {
    data["training"].forEach(item => {
      item.course = (item["certTitleImage"]["URI"]) ?
        "<a target='_blank' href='" + item["certTitleImage"]["URI"] + "' title='" + item["certTitleImage"]["title"] + "'>" + item["courseName"] + "</a>" :
        "<span title='" + item["certTitleImage"]["title"] + "'>" + item["courseName"] + "</span>";

      item.provider = (item["courseOrgURI"]["URI"]) ?
        "<a target='_blank' href='" + item["courseOrgURI"]["URI"] + "' title='" + item["courseOrgURI"]["title"] + "'>" + item["courseOrg"] + "</a>" :
        "<span title='" + item["courseOrgURI"]["title"] + "'>" + item["courseOrg"] + "</span>";
    });
  }

}
