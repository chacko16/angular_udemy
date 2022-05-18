import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //Hier empfangen wir die Daten von post-list
  @Input() post?: Post;

  //wir benötigen einen zweiten Input. Über diesen Kanal
  /*senden wir den Index des Postobjekts zu
  */
 /*Wir nutzen in dem Konstruktor den Routerservice um dann beim Klicken auf den Button auf
 eine andere Komponente nämlich post-edit navigieren zu können. 
 Dann nutzen wir zusätzlich route um herauszufinden, was hinter localhost:4200 steht, also um die
 Route herauszufinden.*/
  @Input() index: number = 0;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  /*
#angular. Input ( @Input() ) is one of the most
 used decorators in Angular apps. It is used to pass
  data from the parent or host component to the child
   component. This decorator has a relation with DOM property 
   in the template where the child component is used.
  */

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }

  onDelete()
  {
    console.log("onDelete() called!");
    this.postService.deletePost(this.index);
  }

  onEdit()
  {
    console.log("onEdit() called");
    //Mit dem index wissen wir jetzt genau anhand der URL welches
    //Bild nun im post-edit dann editiert werden soll
    this.router.navigate(['/post-edit', this.index])
  }

  likePost() {
    this.postService.likePost(this.index);
console.log("likePost() called");
  }

}
