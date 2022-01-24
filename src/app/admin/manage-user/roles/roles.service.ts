import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

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

  GetAllRoles(){  
    return this.http.get(environment.apiUrl+"api/get-role");
  }

  editRoles(data){
    return this.http.post(environment.apiUrl+"api/upsert-role",data);
  }

  deleteRoles(data){
    return this.http.post(environment.apiUrl+"api/delete-role",data);
  }
}
