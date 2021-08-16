import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';    
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  url: string | undefined; 
  constructor(private http: HttpClient) { }
  Savesresponse(responce: any)    
  {    
    this.url =  'http://localhost:64726/Api/Login/Savesresponse';    
    return this.http.post(this.url,responce);    
  }    
}
