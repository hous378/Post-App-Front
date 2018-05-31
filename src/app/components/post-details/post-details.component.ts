import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../domain/ipost';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  idPost: number;
  post: IPost;
  constructor(private _root: ActivatedRoute , private _service: PostsService) { }

  ngOnInit() {
    // using snapshot , + convertir string avec javascript
  // this.idPost = +this._root.snapshot.params['id'];
  // Using an observable
  this._root.params.subscribe(paramaters => this.idPost = paramaters['id']);
  this._service.getPostId(this.idPost).subscribe(res => this.post = res);
}

}
