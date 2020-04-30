import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.styl']
})
export class PageNotFoundComponent implements OnInit {

  errorRoute: string = "n/a";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.errorRoute = data.join("/");
    });
  }
}
