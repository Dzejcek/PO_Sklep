import { Component } from '@angular/core';
import { ComplaintService } from './complaint/complaint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SklepImpl';
  constructor(private loginService: ComplaintService) {}
  ngOnInit() {
    this.loginService.loginUser();
  }
}
