import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../objects/Product';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }
  baseUlr = 'http://localhost:8080/api/produkts/inkoszyk'
  headerToReturn: any
  ngOnInit() {
    this.saveToken()
  }
  getProducts(options: any): Observable<any>{
    // return desc from database
    
    return this.http.get<HttpEvent<any>>(this.baseUlr, options)
  }
  loginUser() {
   
  //   let tokenToSet: any
  //   let loginUrl = 'http://localhost:8080/api/authenticate';
  //   this.http.post(loginUrl, {  
  //     password: 'admin',
  //   rememberMe: true,
  //   username: 'admin'}).subscribe(token => {
      
  //     tokenToSet = token;
  //     console.log(tokenToSet.id_token)

  //   var headers_object = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //     'Authorization': "Bearer " + tokenToSet.id_token});
      
  //     console.log(headers_object.get('Authorization'))
  //       const httpOptions = {
  //         headers: headers_object
  //       };
  //       this.headerToReturn = httpOptions;
  // })

  // return this.headerToReturn;
}

saveToken() {
  let loginUrl = 'http://localhost:8080/api/authenticate';
  this.http.post(loginUrl, {  
    password: 'admin',
  rememberMe: true,
  username: 'admin'}).subscribe(token => localStorage.setItem('token', (token as any).id_token))
}



}
