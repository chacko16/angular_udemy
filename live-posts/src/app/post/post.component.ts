import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //Hier empfangen wir die Daten von post-list
  @Input() post?: Post;
  constructor() { }

  /*
#angular. Input ( @Input() ) is one of the most
 used decorators in Angular apps. It is used to pass
  data from the parent or host component to the child
   component. This decorator has a relation with DOM property 
   in the template where the child component is used.
  */

  ngOnInit(): void {
    console.log(this.post);
  }

}
