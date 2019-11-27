import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../models/recipe";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuickAddService {
  // Java Spring Boot uses port 8080
  // apiUrl: string = "http://localhost:8080/quickadds";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/quickadds";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3000/recipes";

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  addRecipe(quickadd): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, quickadd);
  }
}
