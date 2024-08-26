import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/posts.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 baseUrl :string = `${environment.baseUrl}`;
 postUrl : string = `${this.baseUrl}/posts.json`
  constructor(
    private _http : HttpClient,
    private _snackbar : SnackbarService
  ) { }

  fetchAllPosts() : Observable<Array<Iposts>>{
    return this._http.get<Array<Iposts>>(this.postUrl)
    .pipe(
      map((post)=>{
        let postArr =[];
          for (const key in post) {
            postArr.push({...post[key],id:key})
          }
          return postArr
      })
    )
  }

  getSinglePost(id:string) : Observable<Iposts>{

    // let headers = new HttpHeaders({
    //   "content-type" : "Application/json",
    //   "token" : "Get Token From LS"
    // })
    let singlePost = `${this.baseUrl}/posts/${id}.json`
    // return this._http.get<Iposts>(singlePost, {headers})
    return this._http.get<Iposts>(singlePost)

  }

  addNewPost(postObj : Iposts):Observable<{name : string}>{
    
    return this._http.post<{name : string}>(this.postUrl, postObj);
  }

  postUpdate(obj:Iposts):Observable<Iposts>{
    return this._http.patch<Iposts>(`${this.baseUrl}/posts/${obj.id}.json`,obj);

  }

  postRemove(id : string):Observable<null>{
   

    return this._http.delete<null>(`${this.baseUrl}/posts/${id}.json`)
  }
}

