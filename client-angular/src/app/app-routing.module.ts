import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
