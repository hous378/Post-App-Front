import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostDetailsGuard } from '../guards/post-details.guard';
import { PostsListComponent } from '../components/posts-list/posts-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';

// Navigation rules , Ordre de routage respecte
const my_routes = [
  {path: 'detail/:id', canActivate: [PostDetailsGuard] , component: PostDetailsComponent},
  {path: 'list', component: PostsListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch : 'full'},
  {path: '**', component: NotfoundComponent}
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(my_routes) // my_routes declare au dessus
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
