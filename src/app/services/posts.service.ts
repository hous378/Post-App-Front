import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private _http: HttpClient) { }
  // url: string = 'https://jsonplaceholder.typicode.com/posts';
  url: string = 'http://localhost:8383/api/posts';

  getAllPosts(): Observable< IPost[]> {
    return this._http.get< IPost[]>(this.url);
  }

  getPostId(id: number): Observable< IPost> {
    return this._http.get< IPost>(this.url + '/' + id);
  }
}
