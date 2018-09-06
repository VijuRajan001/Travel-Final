import { Subscription } from 'rxjs/Rx';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from '../../../shared/models/credentials.interface';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/Rx';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { NgZone } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    

})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('', [Validators.required, Validators.email]);

  private subscription : any ;
  brandNew: boolean = false;
  errors: string = '';
  isRequesting: boolean = false ;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private loggedIn = false;
  
   
  constructor(private userService: UserService, private router: Router,
    private activatedRoute: ActivatedRoute, private zone: NgZone, private authService: AuthService, public dialog: MatDialog
     , private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer

  ) {

    this.loggedIn = !!this.authService.getAuthorizationToken();
    this.matIconRegistry.addSvgIcon(
      "nous-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Nous_logo.svg")
    );
  
    }
    


    ngOnInit() {

    // subscribe to router event
        console.log(this.router.isActive);
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      });      
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    
    this.errors='';
    if (valid) {
        this.userService.login(value.email, value.password).subscribe(
            (val) => {
                this.userService.setLoggedIn(true);
                this.userService.setUser(val.user);
               this.authService.setAuthorizationToken('auth_token', val.token);
             
                this.zone.run(() => this.router.navigateByUrl('/home'));
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
        
    }
    }    
    forgot() {
       
        this.router.navigate(['login']); 
    }    


    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
  }

    hide = 1;

    hidePassword() {
        if (this.hide == 1)
            return true;
        else return false;

  }



}
