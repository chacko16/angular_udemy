import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { tap } from "rxjs";
import { Post } from "./post.model";
import { PostService } from "./post.service";

/*
Data Path
https://live-posts-73d67-default-rtdb.firebaseio.com/
*/


//Mit Injectable konvertieren wir die Klasse zu einer Service Klasse in Angular
@Injectable ({ providedIn: 'root'})
export class BackEndService {

    constructor(private postService: PostService, private http: HttpClient)
    {

    }

    // Fun 1 - Save
saveData() {
//Step 1 - get list of posts from post.service
const listofPosts: Post[] = this.postService.getPosts();
//Step 2 - send list of posts to backend
//Nur durch den Import von HtttpClient möglich
this.http.put('https://live-posts-73d67-default-rtdb.firebaseio.com/posts.json',
listofPosts).subscribe((res) => {console.log(res);
});
}
//Subscribe ist eine Art Listener. Es bewirkt in unserem Fall, dass so lange
/*gehorcht wird, bis eine Response vom Backend also von der Datenbank zum Back-end Service
zurück gekommen ist*/

// Fun 2 - Fetch
//Hierzu am besten Video 75 anschauen.
fetchData() {
    this.http.get<Post[]>('https://live-posts-73d67-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(
        tap((listofPosts: Post[])=>{
        console.log(listofPosts);

//Step 2 - Send to post service
this.postService.setPosts(listofPosts);
    })).subscribe();
}
}