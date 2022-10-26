import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/auth`;
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();
  constructor(
    private http: HttpClient,
    private tokerService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
    .pipe(
      tap(response => this.tokerService.saveToken(response.access_token))
    );
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile())
    )
  }

  profile() {
    return this.http.get<User>(`${this.apiUrl}/profile`
    //    headers: {
    // //     Authorization: `Bearer ${token}`,
    // //     // 'Content-type': 'application/json'
    //   }
    ).pipe(
      tap(user => this.user.next(user))
    );
  }

  logout() {
    this.tokerService.removeToken();
  }
}
