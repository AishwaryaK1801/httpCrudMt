import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../models/posts.interface';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postsArr !:Array<Iposts>
  constructor(
    private _postsService : PostsService
  ) { }

  ngOnInit(): void {
    this._postsService.fetchAllPosts()
    .subscribe(res=>{
      console.log(res);
      this.postsArr=res
    })
  }

}
