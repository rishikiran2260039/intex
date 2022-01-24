import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers: { headers: any; };
  
  constructor(public http : HttpClient) { }

  // For Sending headers to API
  getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.headers = httpOptions;
  }

  GetAllUsers(){  
    const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  return this.http.get(environment.apiUrl+"api/get-user");
  }

  editUsers(data){
    return this.http.post(environment.apiUrl+"api/upsert-user/" , data);
    
  }

  updateUserStatus(data) {
    return this.http.post(environment.apiUrl+"api/update-user-status", data);
  }

  deleteUser(data){
    return this.http.post(environment.apiUrl+"api/delete-user",data);
  }

  updateAdminStatus(data) {
    return this.http.post(environment.apiUrl+"api/update-admin-status", data);
  }

  resetUserPassword(data){
    return this.http.post(environment.apiUrl+"api/reset-password", data);
  }

  GetAllRoles(){  
    const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  return this.http.get(environment.apiUrl+"api/get-role");
  }
}
