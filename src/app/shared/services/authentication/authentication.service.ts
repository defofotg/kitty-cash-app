import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { LoginResponse } from '../../model/login-response.model';
import { catchError, EMPTY, Observable, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.api + '/auth'; 

  constructor( private httpClient: HttpClient ) {  }

  login(username? : string, password? : string): Observable<LoginResponse>{
    return this.httpClient.post <LoginResponse>(this.apiUrl + '/login',{
      'username': username,
      'password': password
    }).pipe(
     
      catchError(error => {
        console.log('error', error);
        return EMPTY;
      })
    );

  }

  

  logout(authToken: string): Observable<any> {
    const headers = new HttpHeaders({ 
      'AuthToken': authToken,

     });
    return this.httpClient.post(this.apiUrl + '/logout', {}, { headers, responseType: 'text' }).pipe(
      tap(() => {
        localStorage.removeItem('userToken');
        }),
        catchError((error) => {
          console.error('Erreur lors de la déconnexion.', error);
          return throwError(() => new Error('La déconnexion a échoué. Veuillez réessayer.'));
        
        })
      );
  }
  

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }
 
}
