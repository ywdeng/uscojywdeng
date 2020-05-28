import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../../local-data.service"

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.styl']
})
export class CertificationComponent implements OnInit {
  certData: {};

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.localData.getJSON("assets/certification.json").subscribe(data => {
      this.certData = data;
    });
  }
}
