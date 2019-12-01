import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from "./app.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullFormComponent } from './full-form/full-form.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeImageCardComponent } from './recipe-image-card/recipe-image-card.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, FullFormComponent,  HomeComponent, NavBarComponent, QuickAddComponent, RecipeDisplayComponent, RecipeHomeComponent, RecipeImageCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FullFormComponent, QuickAddComponent]
})
export class AppModule {}
