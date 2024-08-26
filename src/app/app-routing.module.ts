import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : 'posts',
    component : PostDashboardComponent,
    title : 'All Posts'
  },
  {
    path : '',
    redirectTo : 'posts',
    pathMatch : 'full'
  },
  {
    path: 'posts/addPost',
    component : PostFormComponent,
    title : 'Post Form'
  },
  {
    path : 'posts/:postId',
    component : PostComponent,
    title : 'single post'
  },
  {
    path : 'posts/:userId/editPost',
    component : PostFormComponent,
    title : 'Post Form'
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent,
    title : 'page-not-found'
  },
  {
    path : '**',
    redirectTo : 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
