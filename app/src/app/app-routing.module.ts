import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  { path: 'recipe/:id', component: RecipeDisplayComponent},
  { path: 'edit/:id', component: RecipeDisplayComponent},
  { path: 'recipedisplay', component: RecipeDisplayComponent},
  { path: '', redirectTo: 'recipedisplay', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }