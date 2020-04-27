import { Component, OnInit } from '@angular/core';
import { Endpoints } from '../endpoints';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member = {name:'',surname:'', photo:'',phone:''};

  constructor(
    private memberServicesURLS: Endpoints,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(
        routeParams => this.memberServicesURLS.getMember(routeParams.id).subscribe(
          res => this.member = res
        )
      )
     }

  ngOnInit(): void {
  }

}
