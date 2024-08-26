import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iposts } from '../../models/posts.interface';
import { PostsService } from '../../services/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postObj !: Iposts;
  postId !: string
  constructor(
    private _routes :  ActivatedRoute,
    private _postService : PostsService,
    private _dialpgRef : MatDialog,
    private _router : Router,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.postId=this._routes.snapshot.params['postId'];
    console.log(this.postId);
    this._postService.getSinglePost(this.postId)
    .subscribe(res=>{
      console.log(res);
      this.postObj=res
    })

  }

  onRemove(){
    let matDialogConf = new MatDialogConfig();
    matDialogConf.width = '500px'
    matDialogConf.disableClose =true
    matDialogConf.data  =`Are You Sure You want to remove this post?`

    let MatDialogRef=this._dialpgRef.open(ConfirmComponent, matDialogConf)

    MatDialogRef.afterClosed()
    .subscribe(res=>{
      if(res){
        this._postService.postRemove(this.postId)
        .subscribe(res=>{
          this._router.navigate(['/posts']);
          this._snackBar.showSnackbar(`post ${this.postObj.title} is Removed Successfully !`);
        })

      }
    })
  }


}
