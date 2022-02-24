import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject: any;
  constructor(private router: Router) {
    this.loginObject = {
      username: '',
      password: ''
    };
  } 

  ngOnInit(): void {
  }

  login() {
    if(this.loginObject.username == '1' && this.loginObject.password == '1') {
      sessionStorage.setItem('loginId', this.loginObject.username); 
      this.router.navigateByUrl('obrazci'); 

    } else {alert('wrong')}
  }

}
