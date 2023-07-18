import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { ListComponent } from './components/users/list/list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ActionsComponent } from './components/users/actions/actions.component';




const routes: Routes = [
  { path: "", component: HomepageComponent},
  { path: "Homepage", component: HomepageComponent},
  { path: "Lista/FormContatti", component: ActionsComponent},
  { path: "Lista", component: ListComponent},
  { path: "404", component: NotFoundComponent},
  // { path: "**", redirectTo: "/404"}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
