import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { QuickAddService } from './services/quick-add.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'newentry', component: QuickAddService},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: 'recipe/:id', component: RecipeDisplayComponent},
  // { path: 'update/:id', component: },  //This will be the path to update a recipe
  // { path: 'recipedisplay', component: RecipeDisplayComponent},  //**delete */
  // { path: '', redirectTo: 'recipedisplay', pathMatch: 'full'}  //**delete */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }