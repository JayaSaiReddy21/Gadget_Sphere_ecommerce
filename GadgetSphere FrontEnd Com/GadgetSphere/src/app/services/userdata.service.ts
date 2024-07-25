import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounts } from '../component/admin/userslist/userslist.component';
import { User } from '../component/userregistration/user';
import { ProfileDetails } from '../component/myprofile/myprofile';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
 
//user registrations
  constructor(private http:HttpClient) { }
  baseURL="http://localhost:8089/user"
  
  adduser(user:any) {
    return this.http.post(`${this.baseURL}/add`,user)
  }

  FindUserById(userId: any) {
    return this.http.get<User>(`${this.baseURL}/userid/${userId}`);
}

//get all users
getallaccounts() {
  return this.http.get<Accounts[]>(`${this.baseURL}/show`)
}

//detete account by id
deleteaccbyid(userId:any){
  return this.http.delete<Accounts[]>(`${this.baseURL}/delete/${userId}`)
}

//update password
updateNewPassByMail(emailId:any,password:any,user:User){
  return this.http.put<User>(`${this.baseURL}/UpdateNewPassByMail/${emailId}/${password}`,user,{responseType:'text' as 'json'} )
}

//
findByEmailId(emailId:any){
  return this.http.get<User>(`${this.baseURL}/findByEmailId/${emailId}`)
}

//profile pupose
findUserById (userId: number) {
  return this.http.get<User>(`${this.baseURL}/userid/${userId}`)
  }


}