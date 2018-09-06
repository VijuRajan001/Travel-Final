import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { EmailValidator } from '../../directives/email.validator.directive';
import { FocusElement } from '../../directives/focus.directives';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { routing }  from './account.routing';

@NgModule({
  imports: [
      CommonModule, FormsModule, routing, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule
  ],
  declarations: [LoginComponent, EmailValidator, FocusElement],
  providers: [UserService,AuthService],
  exports:[LoginComponent]
})
export class AccountModule { }