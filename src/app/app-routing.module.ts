import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: "courseDetail/:id",
    component: CourseDetailComponent
  },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'testResult', loadChildren: () => import('./components/test-result/test-result.module').then(m => m.TestResultModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
