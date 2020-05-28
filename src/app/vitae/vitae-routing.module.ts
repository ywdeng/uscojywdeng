import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitaeComponent } from './vitae.component';
import { EmploymentComponent } from './employment/employment.component';
import { CertificationComponent } from './certification/certification.component';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';
import { ProjectComponent } from './project/project.component';
import { PublicationComponent } from './publication/publication.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    component: VitaeComponent
  },
  {
    path: 'employment',
    component: EmploymentComponent
  },
  {
    path: 'certification',
    component: CertificationComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'language',
    component: LanguageComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'publication',
    component: PublicationComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitaeRoutingModule { }
