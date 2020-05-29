import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../../local-data.service"

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.styl']
})
export class PublicationComponent implements OnInit {
  pubData: {};

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.localData.getJSON("assets/publication.json").subscribe(data => {
      this.pubData = data;
    });
  }

}
