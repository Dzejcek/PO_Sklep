import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  test = new FormControl();
  categories = ["{category: '2'}", "{category: '3'}", "{category: '4'}"
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
