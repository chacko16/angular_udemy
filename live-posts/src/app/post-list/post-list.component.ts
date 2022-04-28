import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //Erstellung einer Liste von dem Typ Post
  /*listOfPosts: Post[] = [
  new Post("Nature",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
  "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
  "Auther: test@test.com",
  new Date()),
  new Post("Haitti",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
  "Auther: test2@test.com",
  new Date()),
  new Post("Stockholm",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
  "https://paperdoo.de/img/paperdoo-nature-skye.jpg",
  "Auther: test3@test.com",
  new Date())
  ]; */
  listOfPosts: Post[] = [];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listOfPosts = this.postService.getPosts();
  }

}
