import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'create', component: DashboardComponent},
  { path: 'edit/:id', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  //{ path: 'create', component: HomeComponent},
  //{ path: 'edit/:id', component: HomeComponent},
  //{ path: 'home', component: HomeComponent},
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},

  // { path: 'create', component: RecipeHomeComponent},
  // { path: 'edit/:id', component: RecipeHomeComponent},
  // { path: 'recipehome', component: RecipeHomeComponent},
  // { path: '', redirectTo: 'recipehome', pathMatch: 'full'},

  { path: 'create', component: RecipeDisplayComponent},
  { path: 'edit/:id', component: RecipeDisplayComponent},
  { path: 'recipedisplay', component: RecipeDisplayComponent},
  { path: '', redirectTo: 'reciedisplay', pathMatch: 'full'}

  // { path: 'create', component: QuickAddComponent},
  // { path: 'edit/:id', component: QuickAddComponent},
  // { path: 'quickadd', component: QuickAddComponent},
  // { path: '', redirectTo: 'quickadd', pathMatch: 'full'},

  // { path: 'create', component: TaskDisplayComponent},
  // { path: 'edit/:id', component: TaskDisplayComponent},
  // { path: 'taskdisplay', component: TaskDisplayComponent},
  // { path: '', redirectTo: 'taskdisplay', pathMatch: 'full'},

  // { path: 'create', component: NavBarComponent},
  // { path: 'edit/:id', component: NavBarComponent},
  // { path: 'navbar', component: NavBarComponent},
  // { path: '', redirectTo: 'navbar', pathMatch: 'full'},

  // { path: 'create', component: AppComponent},
  // { path: 'edit/:id', component: AppComponent},
  // { path: 'app', component: AppComponent},
  // { path: '', redirectTo: 'app', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
