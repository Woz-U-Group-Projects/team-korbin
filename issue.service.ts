// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class IssueService {

//   uri = 'http://localhost:4000';

//   constructor(private http: HttpClient) { }

//   getIssues() {
//     return this.http.get(`${this.uri}/issues`);
//   }

//   getIssueById(id) {
//     return this.http.get(`${this.uri}/issues/${id}`);
//   }

//   addIssue(recipeName, recipeimage, ingredients, image, category, directions, quantity) {
//     const issue = {
//       recipeName: recipeName,
//       recipeImage: recipeImage,
//       category: category,
//       ingredients: ingredients,
//       recipeQuantity: recipeQuantity,
//       directions: directions
//     };
//     return this.http.post(`${this.uri}/issues/add`, issue);
//   }

//   updateIssue(id, recipeName, recipeimage, category, ingredients, quantity, directions, status) {
//     const issue = {
//       recipeName: recipeName,
//       recipeimage: recipeimage,
//       category: category,
//       ingredients: ingredients,
//       quantity: quantity,
//       directions: directions,
//       status: status
//     };
//     return this.http.post(`${this.uri}/issues/update/${id}`, issue);
//   }

//   deleteIssue(id) {
//     return this.http.get(`${this.uri}/issues/delete/${id}`);
//   }
// }