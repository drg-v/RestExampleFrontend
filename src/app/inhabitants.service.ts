import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Inhabitant } from './inhabitant';

@Injectable({
  providedIn: 'root'
})
export class InhabitantsService {

	getAllUrl = "http://localhost:8080/inhabitants";
	getUrl = "http://localhost:8080/inhabitants/";
	createUrl = "http://localhost:8080/inhabitants/new";
	updateUrl = "http://localhost:8080/inhabitants/update";
	deleteUrl = "http://localhost:8080/inhabitants/delete/";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Inhabitant[]> {
  	return this.http.get<Inhabitant[]>(this.getAllUrl);
  }

  public get(id: string): Observable<Inhabitant[]> {
  	return this.http.get<Inhabitant[]>(this.getUrl + id);
  }

  public create(inhabitant: Inhabitant) {
  	console.log(inhabitant);
  	this.http.post(this.createUrl, inhabitant).subscribe();
  }

  public update(inhabitant: Inhabitant) {
  	console.log(inhabitant);
  	this.http.put(this.updateUrl, inhabitant).subscribe();
  }

  public delete(id: number) {
  	console.log(this.deleteUrl + id);
  	this.http.delete(this.deleteUrl + id).subscribe();
  }
}
