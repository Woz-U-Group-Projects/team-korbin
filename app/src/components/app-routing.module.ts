import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeImageCardComponent } from './recipe-image-card/recipe-image-card.component';
import { FullFormComponent } from './full-form/full-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipedisplay', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'full-form', component: FullFormComponent},
  { path: 'home', component: HomeComponent},
  { path: 'nav-bar', component: NavBarComponent},
  { path: 'quick-add', component: QuickAddComponent},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: 'recipe-home', component: RecipeHomeComponent },
  { path: 'recipe-image-card', component: RecipeImageCardComponent},
  // { path: 'recipe/:id', component: RecipeDisplayComponent},
  // { path: 'edit/:id', component: RecipeDisplayComponent},
  // { path: 'recipedisplay', component: RecipeDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }