import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';


const routes: Routes = [
  { path: 'recipe-display', component: RecipeDisplayComponent},
  { path: 'view-recipe', component: ViewRecipeComponent},
  // { path: 'recipes/:id', component: ViewRecipeComponent},
  { path: 'home', component: RecipeDisplayComponent},
  { path: '', redirectTo: '/recipe-display', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
