import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // since angular 4.3 +
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
