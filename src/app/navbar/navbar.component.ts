import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

logout(){
  this.authenticationService.logout();
}
}
