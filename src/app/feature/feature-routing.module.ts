import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { CoursesComponent } from '../courses/courses.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [{ path: '', component: CoursesComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
