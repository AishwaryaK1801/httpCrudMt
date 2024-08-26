import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../models/posts.interface';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm !: FormGroup;
  postId !:string;
  postObj !: Iposts;
  isInEditMode : boolean = false;

  constructor(
    private _routes : ActivatedRoute,
    private _postService : PostsService,
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.createPostForm();
    this.checkFormMode();
  }

  createPostForm(){
    this.postForm= new FormGroup({
      title : new FormControl(null, [Validators.required]),
      content : new FormControl(null, [Validators.required]),
      userId : new FormControl("1", [Validators.required])
    })
  }

  checkFormMode(){
    this.postId = this._routes.snapshot.params['userId'];
    // console.log(this.postId);
    if(this.postId){
      this.isInEditMode=true
      this._postService.getSinglePost(this.postId)
      .subscribe(res=>{
        console.log(res);
        this.postObj=res;
        this.postForm.patchValue(this.postObj)
      })
    }
    else{
      this.isInEditMode=false
    }
  }

  onPostSubmit(){
    if(this.postForm.valid){
      // console.log(this.postForm.value);
      let newPost = this.postForm.value;
      this._postService.addNewPost(newPost)
      .subscribe(res=>{
        console.log(res);
    this._snackbar.showSnackbar(`post ${newPost.title} is Added Successfully !`)

        this._router.navigate(['/posts'])
      })
    }
  }

  onUpdate(){
    if(this.postForm.valid){
      let updatedObj ={...this.postForm.value, id : this.postId}
      this._postService.postUpdate(updatedObj)
      .subscribe(res=>{
        console.log(res);
        this.postForm.reset();
        this._router.navigate(['/posts']);
    this._snackbar.showSnackbar(`post ${updatedObj.title} is Updated Successfully !`)

      })
    }
  }
}
