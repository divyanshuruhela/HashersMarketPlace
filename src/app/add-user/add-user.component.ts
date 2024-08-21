import { Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule,RouterLink],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
      
  enteredName = '';
  enteredEmail = ''; 
  enteredPassword = '';

  constructor(private userService: UserService, private router: Router)
  {
    
  }
   

  @Output() close = new EventEmitter<any>();

     onSubmit(){
       const user = {
          id : new Date().getTime().toString(),
          name : this.enteredName,
          password : this.enteredPassword,
          email : this.enteredEmail
         }
         this.userService.addUser(user);
         this.router.navigate(
          ['/login']
         );
     }

     onClose(){
      this.router.navigate(
        ['/login']
       );
     }


}
