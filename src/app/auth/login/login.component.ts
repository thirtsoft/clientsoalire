import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from './../token-storage.service';
import { AuthService } from './../auth.service';

import { Login } from './../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginInfo: Login;

  constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private toastr: ToastrService,
        private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log("Login start : " + this.roles);
    }
  }

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new Login(
      this.form.username,
      this.form.password,
      );

    this.authService.attemptAuth(this.loginInfo).subscribe(data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveUsername(data.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(this.roles);
        this.toastr.success('avec succès','Vous etes connecté', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });

        this.router.navigateByUrl("").then(() => {
          window.location.reload();
        });


      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.toastr.error('de connexion','Veuillez verifer vos identifiant', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
      }
    );
  }

  reloadPage() {
    location.reload();
  }

  reloadHomePage() {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(['login']);
    });
  }


}
