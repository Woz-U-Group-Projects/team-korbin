import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipeDisplayComponent } from "./recipe-display/recipe-display.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewRecipeModalComponent } from "./new-recipe-modal/new-recipe-modal.component";

@NgModule({
  declarations: [AppComponent, RecipeDisplayComponent, NavBarComponent, NewRecipeModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewRecipeModalComponent]
})
export class AppModule {}
