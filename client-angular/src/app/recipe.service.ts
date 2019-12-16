import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "./models/recipe";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  // Java Spring Boot uses port 8080
  // apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3000/recipes";

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipe(vId: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.apiUrl + "/recipe/:" + vId);
  }

  addRecipe(recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

}
