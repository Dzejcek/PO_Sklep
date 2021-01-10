import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComplaintService } from '../complaint/complaint.service';
import { TokenInterceptorService } from '../logging/token-interceptor.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  test = new FormControl();
  categories = ["{category: '2'}", "{category: '3'}", "{category: '4'}"
  ]
  constructor(private loginService: ComplaintService) { }

  ngOnInit(): void {

  }

  login(){
    this.loginService.saveToken();
  }

}
