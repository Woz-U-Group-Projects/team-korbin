import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../issue.model';
import { IssueService } from '../issue.service';
//import { map } from 'rxjs/operators';
//import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  issues: Issue[]; 
  displayedColumns = ['recipeName', 'recipeimage', 'ingrediants', 'category', 'directions', 'quantity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }
  
  addIssue(recipeName, recipeimage, ingredients,  category, directions, quantity) {
    this.issueService.addIssue(recipeName, recipeimage, ingredients, category, directions, quantity).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
  
  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues(){
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssu(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

 /** Based on the screen size, switch from standard to one column per row */
  //cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    //map(({ matches }) => {
      //if (matches) {
        //return [
          //{ title: 'Entrees', cols: 1, rows: 1, content: 'List of entree titles will be here' },
          //{ title: 'Appetizers', cols: 1, rows: 1 },
          //{ title: 'Desserts', cols: 1, rows: 1 },
          //{ title: 'Drinks', cols: 1, rows: 1 }
        //];
      //}

      //return [
        //{ title: 'Entrees', cols: 2, rows: 1 },
        //{ title: 'Appetizers', cols: 1, rows: 1, image: 'image file of one recipe' },
        //{ title: 'Add Recipe', cols: 1, rows: 1, content: 'Add a new recipe' },
        //{ title: 'Desserts', cols: 1, rows: 2 },
        //{ title: 'Drinks', cols: 1, rows: 1 }
      //];
    //})
  //);

  //constructor(private breakpointObserver: BreakpointObserver) {}

}