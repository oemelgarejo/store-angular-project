import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateUserDTO, User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = `${environment.API_URL}/users`;
  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http.post(this.apiUrl, dto)
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl)
  }
}
