import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getPosts(addr: string): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:5000/h/"+addr);
  }
  getPostByProof(proof: string): Observable<Post> {
    return this.http.get<Post>("http://localhost:5000/p/"+proof);
  }
}
