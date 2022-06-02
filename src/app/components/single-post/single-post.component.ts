import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post!: Post;
  constructor(private activatedRoute: ActivatedRoute , private backend: BackendService) {
  }

  ngOnInit(): void {
    const proof= this.activatedRoute.snapshot.paramMap.get('proof');
    this.backend.getPostByProof(proof!).subscribe(
      pS => {
        this.post = pS
      }
    )
  }
}
