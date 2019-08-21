import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthnService } from  '../authn;.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthnService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
