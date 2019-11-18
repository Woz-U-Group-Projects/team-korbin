//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatGridListModule, MatInputModule, MatSelectModule, MatCardModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule, MatFormFieldModule, MatOptionModule  } from '@angular/material';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { TaskDisplayComponent } from "./task-display/task-display.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from "./app.component";

//Service
import { IssueService } from './issue.service';
import { createComponent } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
    TaskDisplayComponent, 
    DashboardComponent, 
    NavBarComponent, 
    HomeComponent, 
    RecipeHomeComponent, 
    QuickAddComponent, 
    RecipeDisplayComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule, 
    HttpClientModule, 
    LayoutModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,  
    MatToolbarModule, 
    MatGridListModule, 
    MatInputModule, 
    MatSelectModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatRadioModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})

export class AppModule {}
