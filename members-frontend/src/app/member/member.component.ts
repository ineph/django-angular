import { Component, OnInit } from '@angular/core';
import { Endpoints } from '../endpoints';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member = {name:'',surname:'', photo:'',phone:''};
  isEditing = false;
  inputName;
  inputSurname;
  inputPhone;
  currentMemberId;
  inputBody = {id:'', name:'',surname:'', phone:''};
  currentRoute = this.route.url; 

  constructor(
    private memberServicesURLS: Endpoints,
    private activatedRoute: ActivatedRoute,
    private route: Router) {
      this.activatedRoute.params.subscribe(routeParams => {
        this.memberServicesURLS.getMember(routeParams.id).subscribe(res => this.member = res);
        this.currentMemberId = routeParams.id;
      })
   
    }

  ngOnInit(): void {
  }

  enableEdit(){
    this.isEditing = true   
  }

  disableEdit(){
    this.inputName = '';
    this.inputSurname = '';
    this.inputPhone = '';
    this.isEditing = false
  }

  submit(){
    this.inputBody.name = this.inputName;
    this.inputBody.surname = this.inputSurname;
    this.inputBody.phone = this.inputPhone;
    this.inputBody.id = this.currentMemberId;
    
    console.log(this.inputBody)
    this.memberServicesURLS.putMember(this.inputBody).subscribe(res => console.log(res))
    this.disableEdit()
    alert('Changes already made. Reload the page to see...')
  }
  
}
