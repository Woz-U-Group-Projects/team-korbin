import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
<<<<<<< HEAD
=======
import { QuickAddService } from './services/quick-add.service';
>>>>>>> bf1708d2232b9753e031b6be961a76191dcbff51
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipedisplay', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
<<<<<<< HEAD
  { path: 'home', component: HomeComponent},
  { path: 'nav-bar', component: NavBarComponent},
  { path: 'quick-add', component: QuickAddComponent},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: 'recipe-home', component: RecipeHomeComponent }
  // { path: 'recipe/:id', component: RecipeDisplayComponent},
  // { path: 'edit/:id', component: RecipeDisplayComponent},
  // { path: 'recipedisplay', component: RecipeDisplayComponent},
=======
  { path: 'newentry', component: QuickAddService},
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: 'recipe/:id', component: RecipeDisplayComponent},
  { path: 'recipe-home', component: RecipeHomeComponent},
  // { path: 'update/:id', component: },  //This will be the path to update a recipe
  // { path: 'recipedisplay', component: RecipeDisplayComponent},  //**delete */
  // { path: '', redirectTo: 'recipedisplay', pathMatch: 'full'}  //**delete */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
>>>>>>> bf1708d2232b9753e031b6be961a76191dcbff51
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }