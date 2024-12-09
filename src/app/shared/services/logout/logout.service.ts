import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private apiUrl = environment.api + '/auth/logout'; 
  constructor(private HttpClient: HttpClient) { }
  logout(authToken: string): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + authToken 
    });
    return this.HttpClient.post<any>(this.apiUrl, {}, { headers }).pipe(
      catchError((error) => {
        console.error('Erreur lors de la déconnexion côté serveur :', error);
        return EMPTY;
      })
    );
  }
}
