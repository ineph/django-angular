import { Component, OnInit } from '@angular/core';
import { Endpoints } from '../endpoints';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  inputName;
  inputSurname;
  inputPhone;
  newMemberBody ={name:'',surname:'', phone:''};

  constructor(private endpoints: Endpoints) { }

  ngOnInit(): void {
  }

  submit(){
     this.newMemberBody.name =  this.inputName
     this.newMemberBody.surname =  this.inputSurname
     this.newMemberBody.phone =  this.inputPhone

     this.endpoints.postMember(this.newMemberBody).subscribe(res => console.log(res))
  }

}
