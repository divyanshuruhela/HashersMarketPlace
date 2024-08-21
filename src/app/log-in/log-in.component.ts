import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { UserService } from '../user-service';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

   constructor(private router: Router,
     private commonService : CommonService,
     private userService: UserService)
   {

   }
    userName = "";
    password = "";

    isUserLoggedIn = false;

    showSignUp = false;
    @Output() openSignUpPage = new EventEmitter();
    @Output() userLoggedIn = new EventEmitter();

    OnLogIn(){
       if(this.userService.getUser().find(x=>x.name === this.userName && x.password === this.password) !== undefined)
       {
        
        this.commonService.changeData(this.userName);
        this.router.navigate(
          ['/dashboard',this.userName.toString()]
        )
       }
       else{
        alert("Wrong user name or password");
       }
    }

    openSignUp(){
          this.openSignUpPage.emit();
    }

}
