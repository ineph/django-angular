import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { NewMemberComponent } from './new-member/new-member.component';


const routes: Routes = [
  {path: '', redirectTo: 'members', pathMatch:'full'},
  {path: 'members', component: MembersComponent},
  {path: 'member/:id', component: MemberComponent},
  {path: 'new-member', component: NewMemberComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
