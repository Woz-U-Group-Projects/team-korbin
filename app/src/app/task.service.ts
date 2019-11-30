import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Task } from "./models/task";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class ApiService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/tasks";
  baseUri:string = 'http://localhost:4000/task';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  //apiUrl: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}

  //POST Create
  createTask(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(
        catchError(this.errorMgmt)
    )
  }
  
  //GET All
  getTasks(){
    //return this.http.get<any[]>(this.apiUrl);
    return this.http.get(`${this.baseUri}`);
  }

  //GET Recipe
  getTask(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //PUT Update Recipe
  updateTask(id, data): Observable<any> {
    //return this.http.post<any>(this.apiUrl, task);
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //DELETE Recipe
  deleteTask(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //Error Handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
