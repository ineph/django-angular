import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class Endpoints {

    constructor ( private http: HttpClient){}

    getMembers(){
      return this.http.get<any>(`${environment.api}members/`)
    }

    getMember(id){
      return this.http.get<any>(`${environment.api}members/${id}/`)
    }

}