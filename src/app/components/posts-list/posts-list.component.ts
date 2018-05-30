import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  data: IPost[];
  constructor(private _service: PostsService) { } // DI

  ngOnInit() {
   this._service.getAllPosts().subscribe(res => this.data = res);
  }

}
