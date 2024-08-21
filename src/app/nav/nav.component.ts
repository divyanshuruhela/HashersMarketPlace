import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { user, UserService } from '../user-service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf, RouterModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  showSignupPage = false;
  userName = '';
  @Output() logout = new EventEmitter();
  @Output() ManageItemForm = new EventEmitter();

  constructor(private router: Router,
    private commonservice : CommonService,
    private userService: UserService
  ){
      
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commonservice.data$.subscribe(res => this.userName = res);
  }
  
  SignUp()
  {
   this.showSignupPage = true;
  }

  closeSignup()
  {
    this.showSignupPage = false;
  }

  ManageItem(){
    console.log("show manage Item");
    this.ManageItemForm.emit();
  }

  logOutUser(){
      this.router.navigate(
        ['']
      );
      this.commonservice.changeData('');
  }

  get validateUser()
  {
     if(this.userService.getUser().find(x=>x.name == this.userName))
       return true;
     else
       return false; 
  }

  get userId()
  {
      return this.userService.getUser().find(x=>x.name == this.userName)?.id ?? '';
  }


}
