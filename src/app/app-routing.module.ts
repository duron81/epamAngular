import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { AddCourseComponent } from './courses/add-course/add-course.component';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';
import { ModalLoginComponent } from './shared/modal/modal-login/modal-login.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: ModalLoginComponent},
  { path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]},
  { path: 'courses/:id', component: EditCourseComponent, canActivate: [AuthGuard] },
  { path: 'courses', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }