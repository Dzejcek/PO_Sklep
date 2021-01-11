import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private http: HttpClient) { }

  intercept(req, next) {   
    
    console.log(this.getToken())
      let tokenizedReq = req.clone({
        setHeaders : {
          Authorization: 'Bearer ' + this.getToken()
        }
      })
      return next.handle(tokenizedReq)
      
  }

  saveToken() {
    let loginUrl = 'http://localhost:8080/api/authenticate';
    this.http.post(loginUrl, {  
      password: 'admin',
    rememberMe: true,
    username: 'admin'}).subscribe(token => localStorage.setItem('token', (token as any).id_token))
  }
  

  getToken() {
    return localStorage.getItem('token');
  }
}
