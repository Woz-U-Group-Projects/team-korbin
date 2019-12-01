import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RecipeHomeService } from '../services/recipe-home.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {
  lRecipes: Array<any>;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // { title: {recipeName}, image: {image}, content: {directions} }
          // { title: 'Appetizers', cols: 1, rows: 1 },
          // { title: 'Desserts', cols: 1, rows: 1 },
          // { title: 'Drinks', cols: 1, rows: 1 }
        ];
      }

      return [
        // { title: 'Entrees', cols: 2, rows: 1 },
        // { title: 'Appetizers', cols: 1, rows: 1, image: 'image file of one recipe' },
        // { title: 'Add Recipe', cols: 1, rows: 1, content: 'Add a new recipe' },
        // { title: 'Desserts', cols: 1, rows: 2 },
        // { title: 'Drinks', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private recipeApi: RecipeHomeService) {}

  ngOnInit() {
    this.recipeApi.initRecipes().subscribe(data => this.lRecipes = data['recipes']);
  }

}
