import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../objects/Product';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  listProducts: Product[]
  constructor(private http: HttpClient) { }
  profileForm
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      zamowienieId: new FormControl(''),
      opis: new FormControl('')
    });
  }

  postReklamacja() {
   let opis = this.profileForm.get("opis").value
   let zamId = this.profileForm.get("zamowienieId").value
   const body ={
     opis: opis,
     zamowienieId: zamId
   }
   this.http.post('http://localhost:8080/api/reklamacjas',body).subscribe(next => {window.alert("Reklamacja złożona poprawnie.")}, err => {window.alert("Zły numer zamówienia. (Nie istnieje takie zamówienie lub już złożono reklamację)")})
  }

}
