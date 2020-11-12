import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'course/:semaster/:courseId',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'vitae',
    loadChildren: () => import('./vitae/vitae.module').then(m => m.VitaeModule)
  },
  {
    path: '',
    redirectTo: 'course/1091/security',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
