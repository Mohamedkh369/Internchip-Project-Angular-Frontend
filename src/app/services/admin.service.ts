import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {catchError, firstValueFrom, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {UpdatedUser} from "../model/UpdatedUser";
import {Group} from "../model/Group";
import {Role} from "../model/Role";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  backendUrl = 'http://localhost:8021/keycloak-api/test';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.backendUrl}/view-users`).pipe(
      map(users => users.map(user => ({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      })))
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/delete-user/${id}`);
  }

  editUser(id: string, user: User): Observable<void> {
    return this.http.put<void>(`${this.backendUrl}/edit-user/${id}`, JSON.stringify(user))
  }

  private mapToUser(response: any): User {
    return {
      id: response.id,
      username: response.username,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      password: response.password
    };
  }

  getUserById(id: string): Promise<User> {
    return firstValueFrom(
      this.http.get<any>(`${this.backendUrl}/getUser-id/${id}`).pipe(
        map((response) => this.mapToUser(response))
      )
    );
  }


  updateUser(id: string, user: User): Observable<void> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<void>(`${this.backendUrl}/update-user/${id}`, user, {headers})
  }


  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.backendUrl}/create`, user, {headers});
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.backendUrl}/getGroups`);

  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.backendUrl}/roles`);
  }


  addRole(roleDto: Role): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.backendUrl}/createRole`, roleDto, { headers });
  }

  addGroup( group: string): Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<string>(`${this.backendUrl}/createGroup`, group,{headers}).pipe()
  }

}
