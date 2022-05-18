import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {

    listOfPosts: Post[] = [
        new Post("Nature !",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
        "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
        "Auther: test@test.com",
        new Date(),
        5),
        new Post("Haitti",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
        "Auther: test2@test.com",
        new Date(),
        5),
        new Post("Stockholm",
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat, sed diam voluptua. At vero eos et accusamet justo duo dolores et ea rebum. Stet clita kasd gubergren,no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem",
        "https://paperdoo.de/img/paperdoo-nature-skye.jpg",
        "Auther: test3@test.com",
        new Date(),
        5)
        ];

//facility 1
getPosts()
{
    //Mit this. referenzieren wir immer auf das Objekt oder Variable in der Klasse in der wir gerade sind.
    return this.listOfPosts;
}

//facility 2
deletePost(index: number)
{
    this.listOfPosts.splice(index, 1);
}

//facility 3
addPost(post: Post)
{
    this.listOfPosts.push(post);
}
//facility 4
updatePost(index: number, post: Post)
{
    this.listOfPosts[index] = post;
}

//facility 5
getPost(index: number)
{
    return this.listOfPosts[index];
}

//facility 6
likePost (index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
}


}