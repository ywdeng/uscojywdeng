import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../../local-data.service"

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})
export class ProjectComponent implements OnInit {
  projData: {};

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.localData.getJSON("assets/project.json").subscribe(data => {
      this.projData = data;
    });
  }

}
