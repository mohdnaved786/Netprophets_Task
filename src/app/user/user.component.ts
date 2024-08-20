import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: any;

  constructor(private service: UserService){}
  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.service.getApiData().subscribe({
      next: ((res)=>{
        // console.log(res)
        this.userData = res
        console.log(this.userData)
      }),
      error:((err)=>{
        console.log(err)
      })
    })
  }

}
