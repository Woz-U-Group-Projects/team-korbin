import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeDisplayService {

  constructor(private http: HttpClient) { }
  
  initRecipes(){
    return this.http.get('http://localhost:3000/recipes');
  }
}
