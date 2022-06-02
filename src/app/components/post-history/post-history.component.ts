import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { BackendService } from 'src/app/services/backend.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.css']
})
export class PostHistoryComponent implements OnInit {
  posts: Post[] = [];
  constructor(private activatedRoute: ActivatedRoute , private backend: BackendService) {
  }

  ngOnInit(): void {
    const addr = this.activatedRoute.snapshot.paramMap.get('addr');
    this.backend.getPosts(addr!).subscribe(
      pS => {
        this.posts = pS
      }
    )
  }

}
