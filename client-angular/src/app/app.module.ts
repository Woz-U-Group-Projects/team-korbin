import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeDisplayComponent } from "./recipe-display/recipe-display.component";
import { NewRecipeModalComponent } from "./new-recipe-modal/new-recipe-modal.component";
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, RecipeDisplayComponent, NavBarComponent, NewRecipeModalComponent, ViewRecipeComponent, SideNavComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewRecipeModalComponent]
})
export class AppModule {}
