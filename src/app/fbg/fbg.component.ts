import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-fbg',
  templateUrl: './fbg.component.html',
  styleUrls: ['./fbg.component.scss']
})
export class FbgComponent implements OnInit {
  
  constructor( 
    private socialAuthService: SocialAuthService ) { }

  ngOnInit(): void {

  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
 
}
