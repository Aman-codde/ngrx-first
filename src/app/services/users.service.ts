import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
}
