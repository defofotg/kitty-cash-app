import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../../model/login-response.model';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.api + '/auth';

  constructor( private httpClient: HttpClient , private router: Router) {  }

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


  logout():Observable<void> {
    return this.httpClient.post<void>(this.apiUrl + '/logout', {}).pipe(
      catchError(error => {
        console.log('Erreur lors de la deconnexion cote serveur :', error);
        return EMPTY;
      })
    );
     
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }
  // private clearSession(){
  //   localStorage.clear();
  //   sessionStorage.clear();

  // }
}
