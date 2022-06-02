import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostHistoryComponent } from './components/post-history/post-history.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/history/03bbaf3294e8eae159554a8b71476c1921e95954f5d8ef0c25362e88092dff3d4e'},
  {path: 'history/:addr', component: PostHistoryComponent},
  {path: 'post/:proof', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
