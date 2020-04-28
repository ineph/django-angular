import { Component, OnInit } from '@angular/core';
import { Endpoints } from '../endpoints';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = [];

  constructor(private endpoints: Endpoints  ) {
    this.endpoints.getMembers().subscribe(res =>{ 
      this.members = res;
    })
   }

  ngOnInit(): void {
  }
}
