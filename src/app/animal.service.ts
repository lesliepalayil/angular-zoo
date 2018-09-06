import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animals/models/animal';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AnimalService {

	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) {
	}
	private baseUrl: string = 'http://localhost:3000/api/';

	private animalsUrl: string = `${this.baseUrl}animals`;

	private log(message: string) {
		this.messageService.add(`AnimalService: ${message}`);
	}
	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	
		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead
	
		// TODO: better job of transforming error for user consumption
		this.log(`${operation} failed: ${error.message}`);
	
		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}

	getAnimals(): Observable<any> {
		return this.http.get<Animal[]>(this.animalsUrl).pipe(
			tap(animals => this.log(`fetched animals`)),
			catchError(this.handleError('getAnimals', []))
		  );;
	}

	getAnimalById(id: Number): Observable<Animal> {
		console.log("CALLED....");
		return this.http.get<Animal>(`${this.animalsUrl}/${id}`).pipe(
			tap(animal => this.log(`fetched animal with ID: ${id}`)),
			catchError(this.handleError('getAnimal', null))
		  );
	}
} // */

