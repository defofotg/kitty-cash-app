import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../../model/login-response.model';
import { catchError, EMPTY, Observable } from 'rxjs';

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
}
