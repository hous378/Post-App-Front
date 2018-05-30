import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// Navigation rules , Ordre de routage respecte
const my_routes = [
{path: 'list', component: PostsListComponent},
{path: 'welcome', component: WelcomeComponent},
{path: '', redirectTo: '/welcome', pathMatch : 'full'},
{path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // since angular 4.3 +
    RouterModule.forRoot(my_routes) // my_routes declare au dessus
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
