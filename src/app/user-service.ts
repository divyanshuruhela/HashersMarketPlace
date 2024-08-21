import { Injectable } from "@angular/core";
import { LocalService } from "./services/local.service";

export interface user{
    id:string,
    name :string,
    email: string,
    password: string
  }

@Injectable({
    providedIn : 'root'
})  
export class UserService{
    private dummyUser = [{
        id: '1',
        name : 'ruheladivy',
        password : '123',
        email : 'ruheladi@gmail.com'
    }];
     
     constructor(private localService: LocalService){
           let users = this.localService.getItem('user');
           if(users)
           {
                 this.dummyUser = JSON.parse(users);
           }
     }

     getUser()
     {
        return this.dummyUser;
     }

     addUser(user : user){
          
         this.dummyUser.unshift(user);
         this.localService.setItem('user', JSON.stringify(this.dummyUser));

     }



}