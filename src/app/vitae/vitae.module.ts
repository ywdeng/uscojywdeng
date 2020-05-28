import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitaeRoutingModule } from './vitae-routing.module';
import { VitaeComponent } from './vitae.component';
import { EmploymentComponent } from './employment/employment.component';
import { CertificationComponent } from './certification/certification.component';
import { TrainingComponent } from './training/training.component';
import { LanguageComponent } from './language/language.component';
import { EducationComponent } from './education/education.component';
import { PublicationComponent } from './publication/publication.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [VitaeComponent, EmploymentComponent, CertificationComponent, TrainingComponent, LanguageComponent, EducationComponent, PublicationComponent, ProjectComponent],
  imports: [
    CommonModule,
    VitaeRoutingModule
  ],
  exports: [VitaeComponent]
})
export class VitaeModule { }
