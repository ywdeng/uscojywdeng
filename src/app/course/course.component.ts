import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataService } from "../local-data.service"

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.styl']
})
export class CourseComponent implements OnInit {
  courseId: string = "n/a";
  semaster: string = "n/a";
  courseData: {};
  constructor(
    private activeRoute: ActivatedRoute,
    private localData: LocalDataService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.semaster = params['semaster'];

      const courseDataFile = "assets/" + this.semaster + "-" + this.courseId + ".json";
      this.localData.getJSON(courseDataFile).subscribe(data => {
        this.courseData = data;
        this.prepareData(this.courseData);
      });
    });
  }

  prepareData(data): void {
    let idx = ["lecture", "example", "assignment", "quiz"];
    idx.forEach(subj => {
      if (data[subj] && data[subj]["items"]) {
        data[subj]["items"].forEach(item => {
          if (data[subj]["baseUrl"]) {
            item.fullUrl = (item.url == "#") ? "" : data[subj]["baseUrl"] + "/" + item.url;
          } else {
            item.fullUrl = (item.url == "#") ? "" : item.url;
          }
          if (!item.target) item.target = "_blank";
        });
      }
    });
  }
}
